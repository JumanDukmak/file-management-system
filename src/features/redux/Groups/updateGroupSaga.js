
import { all, call,  takeEvery,put } from "redux-saga/effects";
import { updateGroupFailure, updateGroupSuccess } from "./groupsSlice";
import updateGroupApi from "../../api/Groups/updateGroupApi";


  function* updateGroupSaga(action){
    try{
        
        const response = yield call(updateGroupApi,action.payload.id, action.payload.name,action.payload.user_list,action.payload.file_list);

        
         yield put(updateGroupSuccess(response.data))
    }
    catch(error){
      

         yield put(updateGroupFailure({"error":error.message}))
    }
 }
 

 function* updateGroupWatcherSaga(){
    yield takeEvery('groups/updateGroupStart', updateGroupSaga);
 }
 

 export default function* Update_GroupSaga(){
    yield all([
        updateGroupWatcherSaga(),
    
    ]);
 }

 



