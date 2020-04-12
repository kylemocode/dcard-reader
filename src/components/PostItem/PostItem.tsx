import React from 'react'
import { S } from './style';
import TopicLabel from '../TopicLabel';
import ResponseInfo from '../ResponseInfo';

interface props {
	postTitle: string;
	postExcerpt: string;
	likeCount: number;
	commentCount: number;
	topics: string[];
}

const defaultProps: props = {
	postTitle: '',
	postExcerpt: '',
	likeCount: 0,
	commentCount: 0,
	topics: []
}

const PostItem: React.FC<props> = ({ postTitle, postExcerpt, topics, likeCount, commentCount }) => {

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
		<S.ItemContainer>
			<S.PostTitle>{postTitle}</S.PostTitle>
			<S.PostExcerpt>{trimExcerpt(postExcerpt)}</S.PostExcerpt>
			<S.LabelsContainer>
				{topics && topics.map((topic) => {
					return <TopicLabel>{topic}</TopicLabel>
				})}
			</S.LabelsContainer>
			<ResponseInfo
				likeCount={likeCount}
				commentCount={commentCount}
			/>
		</S.ItemContainer>
	)
}

PostItem.defaultProps = defaultProps;

export default PostItem;