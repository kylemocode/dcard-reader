import React, { ReactNode } from 'react'
import { S } from './style';

interface props {
	children: ReactNode;
}

const TopicLabel: React.FC<props> = ({ children }) => {
	return (
		<S.Label>
			{children}
		</S.Label>
	)
}

export default TopicLabel;