import { FooterWrap } from "./footerStyles";
//image
import home from '../../assets/images/home.png'
import scrab from '../../assets/images/scrab.png'
//Language
import { HOME, SCRAP } from "../../consts/Language";
import {Link} from "react-router-dom";

function Footer() {

	return (
		<FooterWrap>
			<div className="footerBox">
				<Link to="/react-newpaper-project">
					<div className="footerText">
						<img src={home} alt="image"></img>
						<p>{HOME}</p>
					</div>
				</Link>
				<Link to="/scrab">
					<div className="footerText">
						<img className="scrapImg" src={scrab} alt="image"></img>
						<p>{SCRAP}</p>
					</div>
				</Link>
			</div>
		</FooterWrap>
	)
}

export default Footer