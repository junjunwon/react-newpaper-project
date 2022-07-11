import { FooterWrap } from "./footerStyles";
// import Button from "../../components/Button";
import { Button } from "antd";
import styled from 'styled-components'
//image
import home from '../../assets/images/home.png'
import scrap from '../../assets/images/scrap.png'
//Language
import { HOME, SCRAP } from "../../consts/Language";

const StyledButton = styled.button`
	color : #ffffff;
	background-color: transparent;
	border-style: none;
`;

function Footer() {
	return (
		<FooterWrap>
			<div className="footerBox">
				<div className="footerText">
					<img src={home} alt="image"></img>
					<p>{HOME}</p>
				</div>
				<div className="footerText">
					<img className="scrapImg" src={scrap} alt="image"></img>
					<p>{SCRAP}</p>
				</div>
			</div>
		</FooterWrap>
	)
}

export default Footer