import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import articleSlice from "../slice/articleSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        article: articleSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})