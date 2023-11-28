import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
name:'auth',
initialState:{
    user:null,
loading:false,
done:false,
error:"",
message:""
},

reducers:{
LoginReguest:(state) => {
    state.loading=true;
},
LoginSuccess:(state,action)=> {
    state.loading=false;
    state.done=true;
    state.user=action.payload;
},
LoginFailaur:(state,action) =>{
console.log('LoginFailaur');
    state.loading=false;
    state.error=action.payload;
},

LogOutReguest:(state) => {
    console.log('LogOutRequest');
    state.loading=true;

},
LogOutSuccess:(state,action)=> {
    console.log('LogOutSuccess');
    state.loading=false;
    state.done=true;
    state.message=action.payload.message;
},
LogOutFailaur:(state,action) =>{
    console.log('LogOutFailaur');
    state.loading=false;
    console.log('action.payload'+ action.payload);
}











}





})

export const {LoginReguest, LoginSuccess,LoginFailaur,LogOutReguest,LogOutSuccess,LogOutFailaur}=authSlice.actions;
export default authSlice.reducer;