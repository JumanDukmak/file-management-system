
import { all, call,  takeEvery,put } from "redux-saga/effects";
import { updateGroupFailure, updateGroupSuccess } from "./groupsSlice";
import updateGroupApi from "../../api/Groups/updateGroupApi";


  function* updateGroupSaga(action){
    
        
        const response = yield call(updateGroupApi,action.payload.id, action.payload.name,action.payload.user_list,action.payload.file_list);

    
        if(response.status == 200 || response.status ==201){
         yield put(updateGroupSuccess(response.data))
          }
    
else{
         yield put(updateGroupFailure({"error":response}))
    
 }}
 

 function* updateGroupWatcherSaga(){
    yield takeEvery('groups/updateGroupStart', updateGroupSaga);
 }
 

 export default function* Update_GroupSaga(){
    yield all([
        updateGroupWatcherSaga(),
    
    ]);
 }

 



