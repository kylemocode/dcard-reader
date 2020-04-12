import { useEffect, useState } from 'react';
import axios from 'axios';

import { DCARD_BASE_URL, API_POST_LIMIT } from '../constant/api';

export interface FetchPostHook {
	loading: boolean;
	error: boolean;
	posts: any[];
	hasMore: boolean;
}

export default function useFetchPost(lastId?: number | null) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [posts, setPosts] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setLoading(true);
		setError(false);

		if (lastId) {
			axios.get(DCARD_BASE_URL + '&limit=' + API_POST_LIMIT + '&before=' + lastId)
				.then((result) => {
					// @ts-ignore
					setPosts(prevPosts => {
						return [...prevPosts, ...result.data]
					});
					setLoading(false);
				})
				.catch(() => {
					setError(true);
				})
		} else {
			axios.get(DCARD_BASE_URL + '&limit=' + API_POST_LIMIT)
				.then((result) => {
					setPosts(result.data);
					setLoading(false);
				})
				.catch(() => {
					setError(true);
				})
		}

	}, [lastId])

	return { loading, error, posts, hasMore };
}