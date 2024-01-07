import { all, call,  takeEvery,put } from "redux-saga/effects";
import { MultiCheckInFailure, MultiCheckInSuccess } from "../Groups/groupSlice";
import multiCheckInFileApi from "../../api/Files/multiCheckInApi";


  function* multiCheckInFileSaga(action){
    console.log("the list ids files in saga is :"+  action.payload)

    
    const response = yield call(multiCheckInFileApi,action.payload);
    if(response.status == 200 || response.status == 201){
     yield put(MultiCheckInSuccess(response.data))
    }
    else{
     yield put(MultiCheckInFailure({"error":response}))
    }



   
 }
 

 function* multiCheckInWatcherSaga(){
    console.log("multiCheckInWatcherSaga :")

    yield takeEvery('group/MultiCheckInRequest',multiCheckInFileSaga);
 }
 

 export default function* multiCheckIn_FileSaga(){
    console.log("multiCheckIn_FileSaga :")
    yield all([
        multiCheckInWatcherSaga(),
    
    ]);
 }