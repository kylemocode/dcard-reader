import React from 'react'

import { S } from './style';

const LoadingPlaceHolder: React.FC = () => {
	return (
		<S.PlaceHolderContainer>
			<S.TitlePlaceHolder />
			<S.ContentPlaceHolder />
			<S.ContentPlaceHolder />
		</S.PlaceHolderContainer>
	)
}

export default LoadingPlaceHolder;