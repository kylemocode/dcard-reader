import React from 'react';

import { S } from './style';
import TopicLabel from '../TopicLabel';
import ResponseInfo from '../ResponseInfo';

interface props {
	postTitle: string;
	postExcerpt: string;
	likeCount: number;
	commentCount: number;
	topics: string[];
	onClick: any;
}

const PostItem: React.FC<props> = ({ postTitle, postExcerpt, topics, likeCount, commentCount, onClick }) => {

	const trimExcerpt = (excerpt: string | undefined) => {
		if (excerpt) {
			if (excerpt.length <= 50) {
				return excerpt;
			}
			const trimedExcerpt = excerpt.split('').slice(0, 50).join('');
			return trimedExcerpt + '...';
		}
	}

	return (
		<S.ItemContainer onClick={onClick}>
			<S.PostTitle>{postTitle}</S.PostTitle>
			<S.PostExcerpt>{trimExcerpt(postExcerpt)}</S.PostExcerpt>
			<S.LabelsContainer>
				{topics && topics.map((topic, index) => {
					return <TopicLabel key={index}>{topic}</TopicLabel>
				})}
			</S.LabelsContainer>
			<ResponseInfo
				likeCount={likeCount}
				commentCount={commentCount}
			/>
		</S.ItemContainer>
	)
}

export default PostItem;