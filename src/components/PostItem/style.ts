import styled from 'styled-components';
import { device } from '../../utils/media';

export const S = {
	ItemContainer: styled.div`
		width: 85%;
		min-height: 150px;
		padding: 5px 10px;
		border-bottom: solid 1px rgba(0,0,0,0.2);
		cursor: pointer;
		overflow: hidden;

		@media ${device.mobileXL} {
			min-height: 230px;
		}
	`,
	PostTitle: styled.p`
		font-weight: bold;
		font-size: 18px;
	`,
	PostExcerpt: styled.p`
		font-size: 13px;
		color: rgba(0,0,0,0.6);
	`,

	LabelsContainer: styled.div`
		width: 100%;
		display: flex;
		flex-wrap: wrap;

	`

}