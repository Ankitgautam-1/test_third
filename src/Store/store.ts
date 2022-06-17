
import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import userReducer from "./Users/userReducer";

const store:Store =configureStore({
    reducer:reducer,devTools:composeWithDevTools() as any
})

export default store;