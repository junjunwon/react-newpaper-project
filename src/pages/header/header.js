import { useState } from "react";
import { HeaderWrap } from "./headerStyles";
import ButtonImg from "../../components/ButtonImage";
import ModalFilter from "../../components/ModalFilter";

import { useSelector, useDispatch } from "react-redux"
import { storeFilter } from "../../store/slices/FilterSlice"
function Header() {
	const { filter } = useSelector((state) => state.filter)
	const headline = useSelector((state) => state.filter.headline)
	const dispatch = useDispatch()
	dispatch(storeFilter('abc'))
	//now i can use dispatch(storeFilter())
	const [loading, setLoading] = useState(false);
	const [visible, setVisible] = useState(false);

	const handleOk = () => {
		// setLoading(true);
		// setTimeout(() => {
		// 	setLoading(false);
		// 	setVisible(false);
		// }, 3000);
		setLoading(false);
		setVisible(true);
		console.log('loading is ', loading)
		console.log('visible is ', visible)

	};

	return (
		<HeaderWrap>
			<ButtonImg 
				// text="전체 헤드라인"
				text={headline}
				imgPath = "/img/search.png"
				onClick={() => setVisible(true)}
			/>
			<ButtonImg 
				// text="전체 날짜"
				text={headline}
				imgPath = "/img/calendar.png"
				onClick={() => setVisible(true)}
			/>
			<ButtonImg 
				text="전체 국가"
				imgPath = ""
				onClick={() => setVisible(true)}
			/>
			<ModalFilter
				visible={visible}
				loading={loading}
				handleOk={handleOk}>
			</ModalFilter>
		</HeaderWrap>
	)
}

export default Header;