import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUserStart: (state)=>{
            state.isLoading = true
        },
        loginUserSuccess: ()=>{

        },
        loginUserFailure: ()=>{

        },
        // Register
        registerUserStart: (state)=>{
            state.isLoading = true
        },
        registerUserSuccess: (state)=>{
            state.isLoading = false
            state.loggedIn = true
        },
        registerUserFailure: (state)=>{
            state.isLoading = false
            state.loggedIn = false
        }
    }
})

export const {loginUserStart, registerUserStart, registerUserSuccess, registerUserFailure} = authSlice.actions
export default authSlice.reducer
