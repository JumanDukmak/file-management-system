import { createSlice } from "@reduxjs/toolkit";


const groupSlice=createSlice({

name:'group',
initialState:{
loading:false,
error:null,
name:"",
id_user:0,
id_file:0,
group_files:[],//files in group
group_users:[],
user_list:[],//idUsers
file_list:[],//idFiles
history_file:[]

    
}
,reducers:{

    //----------------Get Group Files--------------------------------------
    getGroupFilesStart:(state)=>{
        state.loading=true;
        state.error=null;
        },
        
        getGroupFilesSuccess:(state,action)=>{
        state.loading=false;
        state.error=null;
        state.group_files=action.payload.group_files;
       
        
        
        },
        
        getGroupFilesFailure:(state,action) =>{
        
        state.loading=false;
        state.error=action.payload.error;
        
        },

        resetData: (state) => {
            state.message = null;
            state.error=null;
          },

        //------------------------GET Group Users------------------------
    
        getGroupUsersStart:(state)=>{
            state.loading=true;
            state.error=null;
            
            },
            
            getGroupUsersSuccess:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.group_users=action.payload.group_users;
            
            
            
            },
            
            getGroupUsersFailure:(state,action) =>{
            
            state.loading=false;
            state.error=action.payload.error;
            
            },

            //------------------------Delete User from Group------------------------
            removeMemberStart:(state,action)=>{
                state.loading=true;
                state.error=null;
                state.id_user=action.payload.id_user;
               
                },
                
                removeMemberSuccess:(state,action)=>{
                state.loading=false;
                state.error=null;
         
                state.group_users = state.group_users.filter(user => user.id !== state.id_user);
               
                
                },
                
                removeMemberFailure:(state,action) =>{
                
                state.loading=false;
                state.error=action.payload.error;
                
                },



                  //------------------------Delete File from Group------------------------
            removeFileStart:(state,action)=>{
                state.loading=true;
                state.error=null;
                state.id_file=action.payload.id_file;
               
                },
                
                removeFileSuccess:(state,action)=>{
                state.loading=false;
                state.error=null;
         
                state.group_files = state.group_files.filter(file => file.id !== state.id_file);
               
                
                },
                
                removeFileFailure:(state,action) =>{
                
                state.loading=false;
                state.error=action.payload.error;
                
                },

//----------------------------------------
CheckInFileRequest:(state,action)=>{
    state.loading=true;
state.error=null;
state.id_file=action.payload;
state.message=null;
    
    },
    
    CheckInFileSuccess:(state,action)=>{
    state.loading=false;
    state.message=action.payload.message;
    state.error=null;
    const index = state.group_files.findIndex(file => file.id == state.id_file);
    if (index !== -1) {
        state.group_files[index] = action.payload.data;
   }
    
    
    },
    
    CheckInFileFailure:(state,action) =>{
    
    state.loading=false;
    state.error=action.payload.error;
    state.message=null;
    },


    //----------------------------Check-out----------------------

CheckOutFileRequest:(state,action)=>{
    state.loading=true;
state.error=null;
state.id_file=action.payload;
state.message=null;
    
    },
    
    CheckOutFileSuccess:(state,action)=>{
    state.loading=false;
    state.message=action.payload.message;
    state.error=null;
    const index = state.group_files.findIndex(file => file.id == state.id_file);
    if (index !== -1) {
             state.group_files[index] =  action.payload.data;
        }
   
    
    },
    
    CheckOutFileFailure:(state,action) =>{
    
    state.loading=false;
    state.error=action.payload.error;
    state.message=null;
    },

    //-------------------Multi-CheckIn------------------------

    MultiCheckInRequest:(state,action)=>{
        state.loading=true;
    state.error=null;
    console.log('the list in slice is :'+ action.payload)
state.file_list=action.payload;
    state.message=null;
        
        },
        
        MultiCheckInSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
        //action.payload.data.files[0]
        console.log('the data files is '+action.payload.data.files)
        state.error=null;
        console.log(state.group_files)
        const l=state.file_list;
console.log('the list is :'+l)
        for (let i = 0; i < l.length; i++) {
            console.log('the i is :'+i)
            console.log(l[i])//16
            const index = state.group_files.findIndex(file => file.id == l[i]); 
            console.log("index"+index)
            console.log("action.payload.data.files[i]"+action.payload.data.files[i])
            if (index !== -1) {
                console.log('yes')
                console.log(action.payload.data.files[i])
              
                                 state.group_files[index] =  action.payload.data.files[i];
                                 console.log(state.group_files[index])

                                 console.log(state.group_files)
                           
                                }

          }       },
        
        MultiCheckInFailure:(state,action) =>{
        
        state.loading=false;
        state.error=action.payload.error;
        state.message=null;
        },

        //============================History-File===================
        getHistoryFileStart:(state)=>{
            state.loading=true;
            state.error=null;
            },
            
            getHistoryFileSuccess:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.history_file=action.payload.history_file;
          
            
            
            },
            
            getHistoryFileFailure:(state,action) =>{
            
            state.loading=false;
            state.error=action.payload.error;
            
            },  
    






}





})
export const {

    getGroupFilesStart,getGroupFilesSuccess,getGroupFilesFailure ,
    getGroupUsersStart,getGroupUsersSuccess,getGroupUsersFailure,
    removeMemberStart,removeMemberSuccess,removeMemberFailure,
    removeFileStart,removeFileSuccess,removeFileFailure,
    CheckInFileRequest,CheckInFileSuccess,CheckInFileFailure,
    CheckOutFileRequest,CheckOutFileSuccess,CheckOutFileFailure,resetData,
    MultiCheckInRequest,MultiCheckInSuccess,MultiCheckInFailure,
    getHistoryFileStart,getHistoryFileSuccess,getHistoryFileFailure
 

}=groupSlice.actions;
export default groupSlice.reducer