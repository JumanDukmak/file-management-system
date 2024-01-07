
import { all, call,  takeEvery,put } from "redux-saga/effects";
import checkInFileApi from "../../api/Files/checkInFileApi";
import { CheckInFileFailure, CheckInFileSuccess } from "../Groups/groupSlice";


  function* checkInFileSaga(action){
    console.log("the id file in saga is :"+  action.payload)
   
        
        const response = yield call(checkInFileApi,action.payload);
        
      if(response.status ==200 || response.status ==201){
         yield put(CheckInFileSuccess(response.data))
      }
      else{
         yield put(CheckInFileFailure({"error":response}))
      }
    
   
 }
 

 function* checkInFileWatcherSaga(){
    console.log("checkInFileWatcherSaga :")

    yield takeEvery('group/CheckInFileRequest', checkInFileSaga);
 }
 

 export default function* checkIn_FileSaga(){
    console.log("checkIn_FileSaga :")
    yield all([
        checkInFileWatcherSaga(),
    
    ]);
 }

 



