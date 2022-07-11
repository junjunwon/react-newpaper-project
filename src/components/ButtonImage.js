import styled from 'styled-components';

function ButtonImg({text, imgPath, onClick}) {
	return (
		<StyledButtonImg
			onClick={onClick}
		>
			{/* <img src={imgPath} alt="image"></img> */}
			<div>{imgPath === '' ? '' : <img src={imgPath} alt="image"></img>}</div>
			{text}
		</StyledButtonImg>
	)
}

const StyledButtonImg = styled.button`
	//button 가운데 정렬 tip -> height and line-height 적용
	height: 34px;
	line-height: 34px;
	padding: 0px 10px;
	text-align: center;
	letter-spacing: -0.04em;
	margin-right: 6px;
	margin-left: 6px;
	background-color: #fff;
	border: 1px solid gray;
	border-radius: 30px;

	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
	img {
		margin-right: 5px;
		vertical-align: middle;
	}
	
`;

export default ButtonImg;