// import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	contentList : [],
	pageNumber : ''
}

export const contentsSlice = createSlice({
	name: 'contents',
	initialState,
	reducers: {
		setPageNumber:(state, action) => {
			state.pageNumber = action.payload + 1
		},
		setContents:(state, action) => {
			state.contentList.push(action.payload)
		}
	}
})

export const { setPageNumber, setContents } = contentsSlice.actions
export default contentsSlice