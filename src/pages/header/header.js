import { useState } from "react";
import { HeaderWrap } from "./headerStyles";
import ButtonImg from "../../components/ButtonImage";
import ModalFilter from "../../components/ModalFilter";
import CustomInput from '../../components/Input'

function Header() {
	const [loading, setLoading] = useState(false);
	const [visible, setVisible] = useState(false);

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setVisible(false);
		}, 3000);
	};

	return (
		<HeaderWrap>
			<ButtonImg 
				text="전체 헤드라인"
				imgPath = "/img/search.png"
				onClick={() => setVisible(true)}
			/>
			<ButtonImg 
				text="전체 날짜"
				imgPath = "/img/calendar.png"
				onClick={() => setVisible(true)}
			/>
			<ButtonImg 
				text="전체 국가"
				imgPath = "/"
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