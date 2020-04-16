import React from 'react';

import { S } from './style';

interface props {
	likeCount: number;
	commentCount: number
}

const ResponseInfo: React.FC<props> = ({ likeCount, commentCount }) => {
	return (
		<S.ResponseContainer>
			<S.ResponseImg src="https://i.imgur.com/5SsybfV.png" />
			<S.ResponseCount>{likeCount}</S.ResponseCount>
			<S.CommentTitle>回應</S.CommentTitle>
			<S.CommentCount>{commentCount}</S.CommentCount>
		</S.ResponseContainer>
	)
}

export default React.memo(ResponseInfo);