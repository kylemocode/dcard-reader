import { useEffect, useState } from 'react';
import axios from 'axios';

import { DCARD_POPULAR_POSTS_BASE_URL, API_POST_LIMIT } from '../constant/api';

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
			setTimeout(() => {
				axios.get(DCARD_POPULAR_POSTS_BASE_URL + '&limit=' + API_POST_LIMIT + '&before=' + lastId)
					.then((result) => {
						// @ts-ignore
						setPosts(prevPosts => {
							return [...prevPosts, ...result.data]
						});
						setHasMore(result.data.length > 0);
						setLoading(false);
					})
					.catch(() => {
						setError(true);
					})
			}, 700)
		} else {
			// 第一次進入頁面
			axios.get(DCARD_POPULAR_POSTS_BASE_URL + '&limit=' + API_POST_LIMIT)
				.then((result) => {
					setPosts(result.data);
					setHasMore(result.data.length > 0);
					setLoading(false);
				})
				.catch(() => {
					setError(true);
				})
		}
	}, [lastId])

	return { loading, error, posts, hasMore };
}
