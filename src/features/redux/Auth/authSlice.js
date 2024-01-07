import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
name:'auth',
initialState:{
    user:null,
loading:false,
done:false,
logout:false,
error:null,

message:""
},

reducers:{
LoginReguest:(state) => {
    state.loading=true;
    state.done=false;
    state.error=null;
},
LoginSuccess:(state,action)=> {
    state.loading=false;
    state.done=true;
    state.error=null;
    state.user=action.payload;
},
LoginFailaur:(state,action) =>{
    state.loading=false;
    console.log(action.payload.error)
    state.error=action.payload.error;
    state.done=false;
},
//----------------------LOGOUT--------------------------------------
LogOutReguest:(state) => {
    state.loading=true;
    state.logout=false;
    state.error=null;

},
LogOutSuccess:(state,action)=> {
    state.loading=false;
    state.logout=true;
    state.error=null;
    state.message=action.payload.message;
},
LogOutFailaur:(state,action) =>{
    state.loading=false;
    state.logout=false;
    state.error=action.payload.error;
    
},
restDataToLogOut:(state)=>{
state.logout=false;
}

//------------------------------Register-----------------------









}





})

export const {LoginReguest, LoginSuccess,LoginFailaur,LogOutReguest,LogOutSuccess,LogOutFailaur,restDataToLogOut}=authSlice.actions;
export default authSlice.reducer;
