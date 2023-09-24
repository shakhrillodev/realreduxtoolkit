import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistent-localstorage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    errors: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: (state)=>{
            state.isLoading = true
        },
        signUserSuccess: (state, action)=>{
            state.user = action.payload
            state.isLoading = false
            state.loggedIn = true
            setItem('token', action.payload.token)
        },
        signUserFailure: (state, action)=>{
            state.errors = action.payload
            state.isLoading = false
            state.loggedIn = false
        }
    }
})

export const {signUserStart, signUserSuccess, signUserFailure} = authSlice.actions
export default authSlice.reducer
