import React from "react";
import { HeaderWrap } from "./headerStyles";
import ButtonImg from "../components/ButtonImage";

function Header() {
	return (
		<HeaderWrap>
			<ButtonImg text="전체 헤드라인"></ButtonImg>
			<ButtonImg text="전체 날짜"></ButtonImg>
			<ButtonImg text="전체 국가"></ButtonImg>
		</HeaderWrap>
	)
}

export default Header;