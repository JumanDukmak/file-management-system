
import { all, call, put, takeEvery } from "redux-saga/effects";
import { uploadFileFailure, uploadFileSuccess } from "./filesSlice";
import uploadFileApi from "../../api/Files/uploadFileApi";


function* uploadFileSaga(action){

    try{
       
    
     const formData=new FormData();
     formData.append("file_to_upload",action.payload.file_to_upload) 
     formData.append("name",action.payload.name)
 const response= yield call(uploadFileApi,formData)
 yield put(uploadFileSuccess(response.data))


    }
    catch(error){

yield put(uploadFileFailure({'error':error.message}))
    }

}


function* uploadFileWatcherSaga(){

yield  takeEvery('files/uploadFileStart',uploadFileSaga)

}

export default function* upload_FileSaga(){

yield all([

    uploadFileWatcherSaga()
])

}

