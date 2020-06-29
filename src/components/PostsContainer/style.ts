import styled from 'styled-components';

import { device } from '../../utils/media';

export const S = {
	FullContainer: styled.div`
		width: 100vw;
		height: 100vh;
		background-color: #00324e;
		display: flex;
		justify-content: center;
	`,
	InnerContainer: styled.div`
		width: 75%;
		height: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media ${device.tablet} { 
			width: 80%;
		}
		@media ${device.mobileXL} {
			width: 98%;
		}
		@media ${device.mobileM} {
			width: 100%;
		}
	`
}