import styled from "styled-components";

export const FooterWrap = styled.div`
	position: fixed;	
	width: 395px;
	height: 85px;
	bottom: 0px;
	background: #000000;
	border-radius: 30px;
	margin: 0 auto;
	.footerBox {
		width:100%;
		height:100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		// padding: 20px 90px;
		.footerText {
			color: white;	
			background-color: transparent;
			border-style: none;
			text-align:center;
			line-height: 16px;
    	font-size: 10px;
		}
		.scrapImg {
			border: 2px solid #6D6D6D;
			padding: 5px 4px;
			text-align:center;
			border-radius:4px;
		}
	}
`;