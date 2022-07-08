import styled from 'styled-components';

function ButtonImg({text}) {
	return (
		<StyledButtonImg>{text}</StyledButtonImg>
	)
}

const StyledButtonImg = styled.button`
	padding : 10px 10px;
	text-align: center;
	letter-spacing: -0.04em;
	vertical-align: middle;
	margin-right: 10px;
	background-color: #fff;

	border: 1px solid gray;
	border-radius: 30px;

	font-weight: 400;
	font-size: 14px;
	line-height: 24px;

	
`;

export default ButtonImg;