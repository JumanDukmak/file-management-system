import { createSlice } from "@reduxjs/toolkit";








const groupsSlice=createSlice({
    name:'groups',
    initialState:{
groups:[],
loading:false,
done:false,
id:0,
error:null,
message:null,
    },

    reducers:{

getGroupsStart:(state)=>{
state.loading=true;
state.error=null;

},

getGroupsSuccess:(state,action)=>{
state.loading=false;
state.groups=action.payload.groups;
state.error=null;
},

getGroupsFailure:(state,action) =>{

state.loading=false;
state.error=action.payload.error;

},

resetData: (state) => {
    state.message = null;
    state.error=null;
  },

//---------------------------------ADD-Group------------------------



addGroupStart:(state)=>{
    console.log('addGroupStart')
    state.loading=true;
    state.done=false;
    state.message=null;
    state.error=null;
    
    },
    
    addGroupSuccess:(state,action)=>{
    state.loading=false;
    state.groups.push(action.payload.data);
  state.done=true;
  state.message=action.payload.message;
  state.error=null;
    
    },
    
    addGroupFailure:(state,action) =>{
    
    state.loading=false;
    state.message=null;
    state.error=action.payload.error;
    state.done=false;
    },






//---------------------------------Update-Group------------------------

updateGroupStart:(state)=>{
    state.loading=true;
    state.error=null;
    state.done=false;
    state.message=null;
    },
    
    updateGroupSuccess:(state,action)=>{
      
    state.loading=false;
    state.error=null;
    state.done=true;
    state.message=action.payload.message
        const index = state.groups.findIndex(group => group.id == action.payload.data.id);
        
        console.log("The index is : "+index)
        if (index !== -1) {
            state.groups[index] = action.payload.data;
        }},
    
    updateGroupFailure:(state,action) =>{
    
        state.loading=false;
        state.done=false;
        state.message=null;
    state.error=action.payload.error;
    
    },

//---------------------------------Delete-Groups------------------------


deleteGroupStart:(state,action)=>{
    state.loading=true;
    state.done=false;
    state.error=null;
    state.id=action.payload;
    },
    
    deleteGroupSuccess:(state)=>{
    state.loading=false;
    state.done=true;
    state.error=null;
    state.groups = state.groups.filter(group => group.id !== state.id);
    },
    
    deleteGroupFailure:(state,action) =>{
    
    state.loading=false;
    state.done=false;
    state.error=action.payload.error;
    
    },











    }
    })
    export const {getGroupsStart,getGroupsSuccess,getGroupsFailure,
        addGroupStart,addGroupSuccess,addGroupFailure,
        updateGroupStart,updateGroupSuccess,updateGroupFailure,
        deleteGroupStart,deleteGroupSuccess,deleteGroupFailure,resetData
    
    }=groupsSlice.actions;
    export default groupsSlice.reducer