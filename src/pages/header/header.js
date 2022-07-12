import { HeaderWrap } from "./headerStyles";
import ButtonImg from "../../components/ButtonImage";
import ModalFilter from "../../components/ModalFilter";

import { useSelector, useDispatch } from "react-redux"
import { setVisible } from "../../store/slices/FilterSlice"
import {DATETIME, HEADLINE, TOTAL} from '../../consts/Language'

//image
import search from "../../assets/images/search.png"
import calendar from "../../assets/images/calendar.png"

function Header() {

	const headerFilter = useSelector((state) => state.filter)
	const dispatch = useDispatch()

	const viewHeadline = headerFilter.headline===`${TOTAL} ${HEADLINE}` || ''? 
						`${TOTAL} ${HEADLINE}` : `${headerFilter.headline}`;
	const viewDatetime = headerFilter.datetime===`${TOTAL} ${DATETIME}` || ''? 
						`${TOTAL} ${DATETIME}` : `${headerFilter.datetime}`;
	let viewCountry = headerFilter.country;
	if(headerFilter.countries !== undefined && headerFilter.countries !== '' && headerFilter.countries.length > 0) {
		viewCountry =	`${headerFilter.countries[0]} 외 ${headerFilter.countries.length-1}`;
	}
	
	return (
		<HeaderWrap>
			<ButtonImg 
				// text="전체 헤드라인"
				text={viewHeadline}
				imgPath = {search}
				onClick={() => dispatch(setVisible(true))}
			/>
			<ButtonImg 
				// text="전체 날짜"
				text={viewDatetime}
				imgPath = {calendar}
				onClick={() => dispatch(setVisible(true))}
			/>
			<ButtonImg 
				text={viewCountry}
				imgPath = ""
				onClick={() => dispatch(setVisible(true))}
			/>
			<ModalFilter />
		</HeaderWrap>
	)
}

export default Header;