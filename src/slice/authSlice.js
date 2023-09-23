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
        registerUserSuccess: ()=>{

        },
        registerFailure: ()=>{

        }
    }
})

export const {loginUserStart, registerUserStart} = authSlice.actions
export default authSlice.reducer
