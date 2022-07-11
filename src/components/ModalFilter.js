import moment from 'moment'
import CustomInput from './Input'
import {COUNTRY_LIST} from '../consts/Consts'
//redux
import { useSelector, useDispatch } from "react-redux"
import { storeFilter, setVisible } from "../store/slices/FilterSlice"
//language
import {HEADLINE, DATETIME, COUNTRY, SET_FILTER, INPUT_HEADLINE, INPUT_DATETIME} from '../consts/Language'
//style
import { Button, Modal, Form, DatePicker } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.min.css'
import { useState } from 'react'

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
    height: 480px;
    width: 335px;
    margin: 0 auto;
	}
	.countryClass {
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 5px;
		color: #6D6D6D;
		.countryBtn {
			background-color: white;	
			// border-style: 1px solid;
			border-color: #e9e9e9;
			border-radius: 15px;
			padding: 3px 10px;
		}
	}
	.ant-btn {
		width: 100%;
		height: 60px;
		background-color: #3478F6;
		border-radius: 16px;
	}
`;
const StyledButton = styled.button``;


function ModalFilter() {
	
	const [form] = Form.useForm();
	//Redux
	const visible = useSelector((state) => state.filter.visible)
	const dispatch = useDispatch()

	//hook
	const [headline, setHeadline] = useState('')
	const [datetime, setDatetime] = useState('')
	const [countries, setCountries] = useState([])
	const [addRequestStatus, setAddRequestStatus] = useState('idle')

	//event
	const onHeadlineChanged = (e) => setHeadline(e.target.value)
	const onDatetimeChanged = (e) => setDatetime(e.target.value)
	const onCountriesChanged = (e) => setCountries(countries => [...countries, e.target.value]) //need to check

	//check validation
	const readySubmit = [headline, datetime, countries].every(Boolean) && addRequestStatus === 'idle'
	//submit
	const submitClicked = async () => {
		dispatch(setVisible(false))
		if(readySubmit) {
			try {
				setAddRequestStatus('pending')
				await dispatch(storeFilter({headline, datetime, countries})).unwrap()
			}
			catch(err) {
				console.error('Failed to set filter : ', err)
			} finally {
				setAddRequestStatus('idle')
				console.log('after clicking button is ', visible)
			}
		}
	}


	return (
		<StyledModal
			style={{
			}}
			visible={visible}
			onOk={() => dispatch(setVisible(false))}
			footer={[
				<Button
					className='submitBtn'
					key="submit"
					type="primary"
					onClick={() => dispatch(setVisible(false))}
				>
					Submit
				</Button>
			]}
		>
			<Form form={form} layout="vertical" autoComplete='off'>
				<Form.Item name="headline" label={HEADLINE} >
					<CustomInput
						placeholder={INPUT_HEADLINE}
						value={headline}
						onClick={onHeadlineChanged}
					/>
				</Form.Item>
				<Form.Item name="datetime" label={DATETIME} >
					<DatePicker
						format="YYYY.MM.DD"
						onChange={onDatetimeChanged}
						value={datetime}
						allowClear={false}
						// suffixIcon={null}
						placeholder={INPUT_DATETIME}
						style= {{
							height: "50px",
							width: "100%",
							borderRadius: "16px",
							cursor: "pointer",
							fontSize: "17px",
							margin: "0px",
							padding: "10px",
							inputReadOnly:"true"
						}}
					></DatePicker>
				</Form.Item>
				<Form.Item name="country" label={COUNTRY}>
				<div className="countryClass" onClick={(e) => onCountriesChanged(e)}>
					{
						COUNTRY_LIST.map((country, index) => {{
							return (
								<div key={index}>
									<StyledButton className="countryBtn" key={index}>{country}</StyledButton>
								</div>
							)
						}})
					}
				</div>
				</Form.Item>
			</Form>
			
		</StyledModal>
	)
}

export default ModalFilter