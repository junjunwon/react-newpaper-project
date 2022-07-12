import styled from "styled-components";

export const ContentWrap = styled.div`
	background-color: #F0F1F4;
	height:100%;
	padding-top: 60px;
	position: relative;
	.noScrabClass { 
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		div {
			margin-top: 8px;
			color: #6D6D6D;
		}
		Button {
			width: 295px;
			height: 60px;
			background-color: #3478F6;
			border-radius: 16px;
			margin-top: 30px;
			color: #ffffff;
		}
}
`;