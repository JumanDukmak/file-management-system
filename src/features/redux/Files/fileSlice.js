

import { createSlice } from "@reduxjs/toolkit";




const fileSlice=createSlice({

name:'file',
initialState:{
loading:false,
error:null,
file:"",
message:null
},
reducers:{


    

    //----------------------READ-------------------------


    ReadFileRequest:(state)=>{
        state.loading=true;
        state.error=null;
        },
        
        ReadFileSuccess:(state,action)=>{
        state.loading=false;
        state.error=null;
    
        },
        
        ReadFileFailure:(state,action) =>{
        
        state.loading=false;
        state.error=action.payload.error;
        
        },
//------------------------------Download File------------------


DownloadFileRequest:(state,action)=>{
    state.loading=true;
    state.error=null;
    
    
    },
    
    DownloadFileSuccess:(state,action)=>{
    state.loading=false;
    state.error=null;
    

   
    
    },
    
    DownloadFileFailure:(state,action) =>{
    
    state.loading=false;
    state.error=action.payload.error;
    
    },


    resetDataFile: (state) => {
        state.message = null;
        state.error=null;
      },



    








}



})

export const {

    ReadFileRequest,ReadFileSuccess,ReadFileFailure,
    DownloadFileRequest,DownloadFileSuccess,DownloadFileFailure,resetDataFile
   
   

    

}=fileSlice.actions;
export default fileSlice.reducer