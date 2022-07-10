import { Input } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.min.css'
import PropTypes from 'prop-types'

CustomInput.prototype = {
	value: PropTypes.string.isRequired
}
const StyledInput = styled(Input)`
	border-radius: 16px;
	height:50px;
`;

function CustomInput({placeholder, value}) {
	return (
		<StyledInput
			placeholder={placeholder}
			value={value}
		></StyledInput>
	)
}

export default CustomInput