import styled from 'styled-components';

export const S = {
	PostTitle: styled.h3`
		font-weight: bold;
	`,
	PostContent: styled.p`
		font-size: 14px;
	`,
	PostButton: styled.button`
		background-color: #00324e;
		color: white;
		border-radius: 7px;
		min-height: 30px;
		min-width: 50px;
		cursor: pointer;

		:active {
			outline: none;
		}
	`
}