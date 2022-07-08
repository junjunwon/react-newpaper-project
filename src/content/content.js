import React from "react";
import { ContentWrap } from "./contentStyles";
import ContentBox from "../components/ContentBox"

function Content() {
	return (
		<ContentWrap>
			<ContentBox 
				text="국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작"
				company="조선일보" 
				name="김정확 기자"
				datetime="2021.3.15(목)"
			></ContentBox>
			<ContentBox text="abcsadfasf"></ContentBox>
			<ContentBox text="abc"></ContentBox>
			<ContentBox text="abc"></ContentBox>
			<ContentBox text="abc"></ContentBox>
			<ContentBox text="abc"></ContentBox>
			<ContentBox text="abc"></ContentBox>
			<ContentBox text="abc"></ContentBox>
			<ContentBox text="abc"></ContentBox>
		</ContentWrap>
	)
}

export default Content;