import { createSlice } from "@reduxjs/toolkit";





const usersSlice=createSlice({
    name:'users',
    initialState:{
users:[],
loading:false,
error:null
    },

    reducers:{

getUsersStart:(state)=>{
state.loading=true;
state.error=null;
},

getUsersSuccess:(state,action)=>{
state.loading=false;
state.users=action.payload.users;
state.error=null;


},

getUsersFailure:(state,action) =>{

state.loading=false;
state.error=action.payload.error;

},










    }
    })
    export const {getUsersSuccess,getUsersStart,getUsersFailure,
       
    
    }=usersSlice.actions;
    export default usersSlice.reducer