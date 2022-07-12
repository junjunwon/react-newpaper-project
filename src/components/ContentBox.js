import styled from "styled-components";

function ContentBox({webUrl, text, company, name, datetime, onClick, isStarFill}) {
	if(text.length > 50) {
		text = text.substring(0,52) + "...";
	}
	
	if(name !== null && name.length > 20) {
		name = name.substring(0,21) + "...";
	}
	return (
		<StyledContentBox>
			<div className="textBox">
				<div onClick={webUrl}>
					{text}
				</div>
				<img onClick={onClick} src={isStarFill} alt="image"></img>
			</div>
			<div className="bottomBox">
				<div>
				<span className="companyBox">{company}</span>
				<span className="nameBox">{name}</span>
				</div>
				<div className="dateBox">{datetime.split('T')[0].replaceAll("-",".")}</div>	
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
		top: 20.5%;
		bottom: 3.12%;
		cursor: pointer;
	}

	.textBox {
		width: 240px;
		height: 89px;
		padding-top: 15px;
		margin-bottom: 15px;
		cursor: pointer;
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