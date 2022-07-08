import React from "react";
import { FooterWrap } from "./footerStyles";
import Button from "../components/Button";

function Footer() {
	return (
		<FooterWrap>
			<div className="footerBox">
          <Button text='HOME'></Button>
          <Button text="스크랩"></Button>
          
        </div>
		</FooterWrap>
	)
}

export default Footer