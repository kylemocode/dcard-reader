import styled from 'styled-components';

import { device } from '../../utils/media';

export const S = {
	ItemContainer: styled.div`
		width: 100%;
		min-height: 200px;
		box-sizing: border-box;
		padding: 5px 10px;
		border-bottom: solid 1px rgba(0,0,0,0.2);
		cursor: pointer;
		overflow: hidden;

		@media ${device.tablet} {
			min-height: 250px;
		}
	`,
	PostTitle: styled.p`
		font-weight: bold;
		font-size: 18px;
	`,
	PostExcerpt: styled.p`
		font-size: 13px;
		color: rgba(0,0,0,0.6);
		min-height: 36px;
	`,

	LabelsContainer: styled.div`
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		min-height: 20px;
	`

}