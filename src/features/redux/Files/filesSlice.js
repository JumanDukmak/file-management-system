
import { createSlice } from "@reduxjs/toolkit";








const filesSlice=createSlice({
name:'files',
initialState:{
    files:[],
loading:false,
error:null,
id:0,
message:null


},

reducers:{
    //-------------------------------GET ALL Files----------------------------
getFilesReguest:(state) => {
   
    state.loading=true;
    state.error=null;

}
,
getFilesSuccess:(state,action)=> {

    
    state.loading=false;
    state.error=null;
    state.files=action.payload.files;
},

getFilesFailaur:(state,action) =>{

    state.loading=false;
  state.error=action.payload.error;
 

},

resetDataToFile: (state) => {
    state.message = null;
    state.error=null;
  },


//--------------------------Delete-File----------------------------

deleteFileStart:(state,action)=>{
    state.loading=true;
    state.error=null;
    state.id=action.payload;
 
    },
    
    deleteFileSuccess:(state,action)=>{
    state.loading=false;
    state.error=null;
    state.files = state.files.filter(file => file.id !== state.id);
   
    
    },
    
    deleteFileFailure:(state,action) =>{
    
    state.loading=false;
    state.error=action.payload.error;
    
    },





//--------------------------Add File-------------------------------

uploadFileStart:(state)=>{
   
    state.loading=true;
   state.error=null;
   state.message=null;
    
    },
    
    uploadFileSuccess:(state,action)=>{
    state.loading=false;
    state.error=null;
       state.files.push(action.payload.data);
    state.message=action.payload.message;
    
    },
    
    uploadFileFailure:(state,action) =>{
    
    state.loading=false;
    state.message=null;
    state.error=action.payload.error;
    
    },




//--------------------------Edite File-------------------------------

updateFileStart:(state,action)=>{
    state.loading=true;
    state.error=null;
    state.message=null;
    state.id=action.payload.id;
    },
    
    updateFileSuccess:(state,action)=>{
        
    state.loading=false;
    state.message=action.payload.message;
state.error=null;
    const index = state.files.findIndex(file => file.id == state.id);
        
   
        if (index !== -1) {
             state.files[index] = action.payload.file;
        }
        
 
    
    },
    
    updateFileFailure:(state,action) =>{
    
    state.loading=false;
    state.error=action.payload.error;
    state.message=null;
    
    },


    resetDataFiles: (state) => {
        state.message = null;
        state.error=null;
      },








}





})

export const {getFilesReguest, getFilesSuccess,getFilesFailaur,
    deleteFileStart,deleteFileSuccess,deleteFileFailure,
    uploadFileStart,uploadFileSuccess,uploadFileFailure,
    updateFileStart,updateFileSuccess,updateFileFailure,resetDataToFile,resetDataFiles
    


}=filesSlice.actions;
export default filesSlice.reducer;