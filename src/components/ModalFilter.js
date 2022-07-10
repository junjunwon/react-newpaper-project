//type set
import PropTypes from 'prop-types'
import moment from 'moment'
//custom
import CustomInput from './Input'
//language
import {HEADLINE, DATETIME, COUNTRY, SET_FILTER} from '../consts/Language'
//style
import { Button, Modal, Form, DatePicker } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.min.css'

ModalFilter.propTypes = {
	visible : PropTypes.bool,
	loading : PropTypes.bool,
	submitFunc : PropTypes.func,
};
const StyledModal = styled(Modal)`
	.ant-modal-header {
		border-bottom: 0px;
	}
	.ant-modal-footer {
		border-top: 0px;
	}
	.ant-modal-content {
		// overflow: auto;
		border-radius: 16px;
		background-color: #ffffff;

		//position
		// position: absolute;
		// left: 20px;
		// top: 166px;

		//sizing
		width:335px;
		height:480px;
		border-radius: 16px;
	}
`;

function ModalFilter({visible, handleOk, loading, inputValue}) {
	const [form] = Form.useForm();
	return (
		<StyledModal
			style={{
				left:20,
				top:166
			}}
			visible={visible}
			onOk={handleOk}
			footer={[
				<Button
					key="submit"
					type="primary"
					loading={loading}
					onClick={handleOk}
				>
					Submit
				</Button>
			]}
		>
			<Form form={form} layout="vertical" autoComplete='off'>
				<Form.Item name="headline" label={HEADLINE} >
					<CustomInput
						placeholder="검색하실 헤드라인을 입력해주세요."
						value={inputValue}
					/>
				</Form.Item>
				<Form.Item name="datetime" label={DATETIME} >
					<DatePicker
						format="YYYY.MM.DD"
						//onChange={}
						allowClear={false}
						suffixIcon={null}
						style= {{
							height: "50px",
							width: "285px",
							border: "1px solid",
							borderRadius: "16px",
							cursor: "pointer",
							fontSize: "17px",
							margin: "0px",
							padding: "0px",
							inputReadOnly:"true"
						}}
					></DatePicker>
				</Form.Item>
			</Form>
			
		</StyledModal>
	)
}

export default ModalFilter