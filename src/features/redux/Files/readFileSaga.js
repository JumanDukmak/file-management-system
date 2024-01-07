import { all, call, put, takeEvery } from "redux-saga/effects";
import { ReadFileFailure, ReadFileSuccess } from "./fileSlice";
import readFileApi from "../../api/Files/readFileApi";


function* readFileSaga(action){

    const response= yield call(readFileApi,action.payload)

    if(response.status ==200 || response.status ==201){     

 // Create a Blob from the file data
 const fileBlob = new Blob([response.data], { type: response.data.type });

 // Create a URL for the Blob
 const fileUrl = window.URL.createObjectURL(fileBlob);

 // Open the file in a new tab
 window.open(fileUrl);

yield put(ReadFileSuccess(response.data))


    }
   else{



yield put(ReadFileFailure({'error':response.data.message}))


    }

}


function* readFileWatcherSaga(){

yield  takeEvery('file/ReadFileRequest',readFileSaga)

}

export default function* read_FileSaga(){

yield all([

    readFileWatcherSaga()
])

}

