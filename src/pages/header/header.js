import React from "react";
import { HeaderWrap } from "./headerStyles";
import ButtonImg from "../../components/ButtonImage";

function Header() {
	return (
		<HeaderWrap>
			<ButtonImg 
				text="전체 헤드라인"
				imgPath = "/img/search.png"
			/>
			<ButtonImg 
				text="전체 날짜"
				imgPath = "/img/calendar.png"
			/>
			<ButtonImg 
				text="전체 국가"
				imgPath = "/"
			/>
		</HeaderWrap>
	)
}

export default Header;