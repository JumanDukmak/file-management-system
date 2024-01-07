
import { all, call,  takeEvery,put } from "redux-saga/effects";
import checkOutFileApi from "../../api/Files/checkOutFileApi";
import { CheckOutFileFailure, CheckOutFileSuccess } from "../Groups/groupSlice";


  function* checkOutFileSaga(action){
   
   const response = yield call(checkOutFileApi,action.payload);

    try{
         yield put(CheckOutFileSuccess(response.data))
    }
    catch(error){
     
           yield put(CheckOutFileFailure({"error":response}))
    }
 }
 

 function* checkOutFileWatcherSaga(){
    console.log("checkOutFileWatcherSaga :")

    yield takeEvery('group/CheckOutFileRequest', checkOutFileSaga);
 }
 

 export default function* checkOut_FileSaga(){
    console.log("checkOut_FileSaga :")
    yield all([
        checkOutFileWatcherSaga(),
    
    ]);
 }

 



