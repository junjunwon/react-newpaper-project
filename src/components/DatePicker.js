import { DatePicker } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.min.css'

const StyledDatePicker = styled(DatePicker)`
	width: 300px;
	height:50px;
`;

function CustomDatePicker({onChange, open}) {
	<StyledDatePicker onChange={onChange} open={open}></StyledDatePicker>
}

export default CustomDatePicker