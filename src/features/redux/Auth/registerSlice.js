import { createSlice } from "@reduxjs/toolkit";





const registerSlice=createSlice(

{
name:'register',

initialState:{
    user:null,
loading:false,
done:false,
error:null,
},

reducers:{
RegisterReguest:(state) => {
    state.loading=true;
    state.done=false;
    state.error=null;
},
RegisterSuccess:(state,action) =>{

    state.loading=false;
    state.done=true;
    state.error=null;
    state.user=action.payload;

},

RegisterFailure:(state,action) =>{
    state.loading=false;
    state.error=action.payload.error;
    state.done=false;

}






}



}



)
export const {RegisterReguest,RegisterSuccess,RegisterFailure} = registerSlice.actions;
export default registerSlice.reducer;