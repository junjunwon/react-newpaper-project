import { useState } from "react";
import { HeaderWrap } from "./headerStyles";
import ButtonImg from "../../components/ButtonImage";
import ModalFilter from "../../components/ModalFilter";

import { useSelector, useDispatch } from "react-redux"
import { storeFilter, setVisible } from "../../store/slices/FilterSlice"

//image
import search from '../../assets/images/search.png'
import calendar from '../../assets/images/calendar.png'

function Header() {

	const headerFilter = useSelector((state) => state.filter)
	const dispatch = useDispatch()
	// dispatch(storeFilter('abc'))

	return (
		<HeaderWrap>
			<ButtonImg 
				// text="전체 헤드라인"
				text={headerFilter.headline}
				imgPath = {search}
				onClick={() => dispatch(setVisible(true))}
			/>
			<ButtonImg 
				// text="전체 날짜"
				text={headerFilter.datetime}
				imgPath = {calendar}
				onClick={() => dispatch(setVisible(true))}
			/>
			<ButtonImg 
				text={headerFilter.country}
				imgPath = ""
				onClick={() => dispatch(setVisible(true))}
			/>
			<ModalFilter />
		</HeaderWrap>
	)
}

export default Header;