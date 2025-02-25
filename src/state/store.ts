import { createStore, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import reducers from "./reducers";

export const store = configureStore({
    reducer: reducers
})

export type AppDispatch = typeof store.dispatch;
//export type RootState = ReturnType<typeof store.getState>;