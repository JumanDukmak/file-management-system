import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { getGroupFilesFailure, getGroupFilesSuccess } from "./groupSlice";
import getGroupFilesApi from "../../api/Groups/groupFilesApi";



function* getGroupFilesSaga(action){

    try{
            
const response= yield call(getGroupFilesApi,action.payload)

 yield put(getGroupFilesSuccess({'group_files':response.data.files}))


    }
    catch(error){

yield put(getGroupFilesFailure({'error':error.message}))
    }

}


function* groupFilesWatcherSaga(){

yield  takeEvery('group/getGroupFilesStart',getGroupFilesSaga)

}

export default function* groupFilesSaga(){

yield all([

    groupFilesWatcherSaga()
])

}

