


import { all, call, put, takeEvery } from "redux-saga/effects";
import { updateFileFailure, updateFileSuccess } from "./filesSlice";
import updateFileApi from "../../api/Files/updateFileApi";



function* updateFileSaga(action){

    try{
     
     const formData=new FormData();
     formData.append("updated_file",action.payload.updated_file) 
     formData.append("name",action.payload.name)
    
 const response= yield call(updateFileApi,formData,action.payload.id)


//msg
 yield put(updateFileSuccess(response.data))


    }
    catch(error){

yield put(updateFileFailure({'error':error.message}))
    }

}


function* updateFileWatcherSaga(){

yield  takeEvery('files/updateFileStart',updateFileSaga)

}

export default function* update_FileSaga(){

yield all([

    updateFileWatcherSaga()
])

}

