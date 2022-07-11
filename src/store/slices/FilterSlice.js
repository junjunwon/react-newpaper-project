// import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
//language
import {HEADLINE, DATETIME, COUNTRY, TOTAL} from '../../consts/Language'

const initialState = {
	headline : TOTAL+' '+HEADLINE,
	datetime : TOTAL+' '+DATETIME,
	country : [TOTAL+' '+COUNTRY][0],
	visible: false
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
			state = action.payload
		},
		setVisible:(state, action) => {
			state.visible = action.payload
			console.log('initialState is ');
			console.log(initialState);
		}

	}
})

export const { storeFilter, setVisible } = filterSlice.actions
export default filterSlice