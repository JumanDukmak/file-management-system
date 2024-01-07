import { all, call, put, takeEvery } from "redux-saga/effects";
import {  removeFileFailure, removeFileSuccess } from "./groupSlice";
import removeFileApi from "../../api/Groups/removeFileApi";



function* removeFileSaga(action){
    const  response= yield call(removeFileApi,action.payload)
    
        if(response.status == 201 || response.status == 200){
      yield put(removeFileSuccess(response.data))
        }
       
        else {
            yield put(removeFileFailure({'error':response}))
        }
    
}


function* removeFileWatcherSaga(){   
yield  takeEvery('group/removeFileStart',removeFileSaga)

}

export default function* remove_FileSaga(){

yield all([

    removeFileWatcherSaga()
])

}

