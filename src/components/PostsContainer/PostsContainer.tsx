import React, { ReactNode } from 'react';

import { S } from './style';

interface props {
	children: ReactNode;
}

const PostsContainer: React.FC<props> = ({ children }) => {
	return (
		<S.FullContainer>
			<S.InnerContainer>
				{children}
			</S.InnerContainer>
		</S.FullContainer>
	)
}

export default PostsContainer;