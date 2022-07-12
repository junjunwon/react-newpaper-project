// import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {HEADLINE, DATETIME, COUNTRY, TOTAL} from '../../consts/Language'

const initialState = {
	headline : TOTAL+' '+HEADLINE,
	datetime : TOTAL+' '+DATETIME,
	country : [TOTAL+' '+COUNTRY][0],
	visible: false,
	isSubmited: false
}

// export const setFilter = createAsyncThunk(
// 	'filter/setFilter',
// 	async (initialState) => {
// 		const response = await 
// 	}
// )

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		storeFilter:(state, action) => {
			state.headline = action.payload.headline;
			state.datetime = action.payload.datetime;
			state.countries = action.payload.countries;
		},
		setVisible:(state, action) => {
			state.visible = action.payload
		},
		setSubmit:(state, action) => {
			state.isSubmited = action.payload
		},
	}
})

export const { storeFilter, setVisible, setSubmit } = filterSlice.actions
export default filterSlice