import { all, call, put, takeEvery } from "redux-saga/effects";
import { getFilesFailaur, getFilesSuccess } from "./filesSlice";
import getFilesApi from "../../api/Files/filesApi";

function* getFilesSaga(){
    try{   
const response= yield call(getFilesApi)
//print('the response of  get files is :'+ response.status)
yield put(getFilesSuccess({'files':response.data.files}))


    }
    catch(error){

yield put(getFilesFailaur({'error':error.message}))

    }

}


function* filesWatcherSaga(){

yield  takeEvery('files/getFilesReguest',getFilesSaga)

}

export default function* filesSaga(){

yield all([

    filesWatcherSaga()
])

}

