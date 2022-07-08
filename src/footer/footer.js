import React from "react";
import { FooterWrap } from "./footerStyles";
import Button from "../Button";

function Footer() {
	return (
		<FooterWrap>
			<div className="footerWrap">
          <Button text='HOME'></Button>
          <Button text="스크랩"></Button>
          
        </div>
		</FooterWrap>
	)
}

export default Footer