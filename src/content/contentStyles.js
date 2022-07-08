import styled from "styled-components";

export const ContentWrap = styled.div`
	
	.contentWrap {
		position: fixed;
		top: 70px;
		left:40px;
		.flexBox {
			width:300px;
			height:200vh;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items:center;
			.titleBox {
				width: 300px;
				height: 200px;
				background-color:#fff;
				margin-top: 10px;
				text-align: center;
			}
		}
	}
`;