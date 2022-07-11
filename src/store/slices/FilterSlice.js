import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	headline : 'redux toolkit',
	datetime : '',
	country : ''
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		storeFilter:(state, action) => {
			state.headline = action.payload
		},
	}
})

export const { storeFilter } = filterSlice.actions
export default filterSlice