import { all, call, put, takeEvery } from "redux-saga/effects";
import { DownloadFileFailure, DownloadFileSuccess } from "./fileSlice";
import downloadFileApi from "../../api/Files/downloadFileApi";


function* downloadFileSaga(action){

    const response= yield call(downloadFileApi,action.payload.id)
   
 
    // console.log('l'+response.status)
     if(response.status ==200 || response.status ==201){
    
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', action.payload.path);
        document.body.appendChild(link);
        link.click();


        yield put(DownloadFileSuccess(response.data))


    }
    else{
       
       console.log(response.data.message) 
 yield put(DownloadFileFailure({'error':response.data.message}))
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

