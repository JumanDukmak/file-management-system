import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user_name:"",
    password:"",
    token:"",
    done:false,
    loading:"",
    error:"",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        LoginRequest: (state) => {
            state.loading="loading";
        },
        LoginSuccess: (state, action) => {
            state.done=true
            state.token = action.payload.token
            console.log("from login saga 1" + action.payload.token)
        },
        LoginFailaur: (state,action) => {
            state.error=action.payload
        },
    },
})

export const { LoginRequest, LoginSuccess , LoginFailaur } = authSlice.actions;
export default authSlice.reducer;