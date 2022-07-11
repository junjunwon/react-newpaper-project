import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { filterSlice } from './slices/FilterSlice'

const logger = createLogger();

const rootReducer = combineReducers({
	filter : filterSlice.reducer
});

const initialState = {};

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	// devTools: process.env.NODE_ENV !== 'production',
	preloadedState: initialState,
	enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export default store;