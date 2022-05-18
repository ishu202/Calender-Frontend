import { configureStore, createSlice } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import createSagaMiddleware from "redux-saga";

import item_list_calender from "./features/calender.slice";
import rootSaga from "./sagas/index";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		item_list_calender
	},
	middleware: ( getDefaultMiddleware ) => [
		...getDefaultMiddleware({ thunk: false }),
		sagaMiddleware
	],
	devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run( rootSaga, store );
setupListeners( store.dispatch );

export default store;
