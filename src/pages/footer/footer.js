import { FooterWrap } from "./footerStyles";
// import Button from "../../components/Button";

//image
import home from '../../assets/images/home.png'
import scrap from '../../assets/images/scrap.png'
//Language
import { HOME, SCRAP } from "../../consts/Language";
import {Link} from "react-router-dom";

function Footer() {
	return (
		<FooterWrap>
			<div className="footerBox">
				<Link to="/">
					<div className="footerText">
						<img src={home} alt="image"></img>
						<p>{HOME}</p>
					</div>
				</Link>
				<Link to="/scrab">
					<div className="footerText">
						<img className="scrapImg" src={scrap} alt="image"></img>
						<p>{SCRAP}</p>
					</div>
				</Link>
			</div>
		</FooterWrap>
	)
}

export default Footer