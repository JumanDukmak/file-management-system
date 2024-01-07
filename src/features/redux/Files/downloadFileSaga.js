import { all, call, put, takeEvery } from "redux-saga/effects";
import { DownloadFileFailure, DownloadFileSuccess } from "./fileSlice";
import downloadFileApi from "../../api/Files/downloadFileApi";


function* downloadFileSaga(action){

    try{
        
const response= yield call(downloadFileApi,action.payload.id)

const url = window.URL.createObjectURL(new Blob([response.data]));
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', action.payload.path);
document.body.appendChild(link);
link.click();


 yield put(DownloadFileSuccess(response.data))


    }
    catch(error){

yield put(DownloadFileFailure({'error':error.message}))
    }

}


function* downloadFileWatcherSaga(){

yield  takeEvery('file/DownloadFileRequest',downloadFileSaga)

}

export default function* download_FileSaga(){

yield all([

    downloadFileWatcherSaga()
])

}

