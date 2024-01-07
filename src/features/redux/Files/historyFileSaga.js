import { all, call, put, takeEvery } from "redux-saga/effects";
import getHistoryFileApi from "../../api/Files/historyFileApi";
import { getHistoryFileFailure, getHistoryFileSuccess } from "../Groups/groupSlice";



function* getHistoryFileSaga(action){
console.log('in history :'+ action.payload)
    try{
       
const response= yield call(getHistoryFileApi,action.payload)

yield put(getHistoryFileSuccess({'history_file':response.data.history}))


    }
    catch(error){

yield put(getHistoryFileFailure({'error':error.message}))
    }

}


function* historyFileWatcherSaga(){

yield  takeEvery('group/getHistoryFileStart',getHistoryFileSaga)

}

export default function* history_FileSaga(){

yield all([

    historyFileWatcherSaga()
])

}

