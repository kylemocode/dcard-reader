import styled from 'styled-components';
import { device } from '../../utils/media';

export const S = {
	FullContainer: styled.div`
		width: 100vw;
		background-color: #00324e;
		display: flex;
		justify-content: center;
	`,
	InnerContainer: styled.div`
		width: 60%;
		height: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media ${device.tablet} { 
			width: 80%;
		}
		
		@media ${device.mobileL} {
			width: 95%;
		}

		@media ${device.mobileM} {
			width: 100%;
		}

		@media ${device.mobileS} {
			width: 100%;
		}
	`
}