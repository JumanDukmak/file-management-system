import { all, call, put, takeEvery } from "redux-saga/effects";
import { deleteFileFailure, deleteFileSuccess } from "./filesSlice";
import deleteFileApi from "../../api/Files/deleteFileApi";


function* deleteFileSaga(action){
    
    try{
        const response= yield call(deleteFileApi,action.payload)
 yield put(deleteFileSuccess(response.data))


    }
    catch(error){

yield put(deleteFileFailure({'error':response}))
    }

}


function* deleteFileWatcherSaga(){

yield  takeEvery('files/deleteFileStart',deleteFileSaga)

}

export default function* delete_FileSaga(){

yield all([

    deleteFileWatcherSaga()
])

}

