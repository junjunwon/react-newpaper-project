import styled from 'styled-components';

function ButtonImg({text, imgPath}) {
	return (
		<StyledButtonImg>
			<img src={imgPath} alt="image"></img>
			{text}
		</StyledButtonImg>
	)
}

const StyledButtonImg = styled.button`
	padding : 10px 10px;
	text-align: center;
	letter-spacing: -0.04em;
	margin-right: 6px;
	margin-left: 6px;
	background-color: #fff;
	border: 1px solid gray;
	border-radius: 30px;

	font-weight: 400;
	font-size: 14px;

	img {
		margin-right: 5px;
		vertical-align: middle;
	}
	
`;

export default ButtonImg;