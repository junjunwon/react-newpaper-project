import styled from "styled-components";
//image
import star from '../assets/images/star.png'
import starFill from '../assets/images/starFill.png'

function ContentBox({text, company, name, datetime, onClick}) {
	return (
		<StyledContentBox>
			<div className="textBox">
				{text}
				<img onClick={onClick} src={star} alt="image"></img>
			</div>
			<div className="bottomBox">
				<div>
				<span className="companyBox">{company}</span>
				<span className="nameBox">{name}</span>
				</div>
				<div className="dateBox">{datetime}</div>	
			</div>
		</StyledContentBox>
	)
}

const StyledContentBox = styled.div`
	position:relative;
	width: 335px;
	padding: 10px 20px;
	background-color:#fff;
	border-radius: 8px;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	margin: 20px 30px;

	img {
		position: absolute;
		right: 14.5px;
		top: 16.5%;
		bottom: 3.12%;
	}

	.textBox {
		width: 260px;
		margin-bottom: 15px;
	}
	.bottomBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		font-weight: 400;
		font-size: 13px;
		color: #000000;
		.companyBox {
			width: 44px;
			height: 20px;
			margin-right: 10px;
		}
		.nameBox {
			width: 57px;
			height: 20px;
		}
	}
`;

export default ContentBox;