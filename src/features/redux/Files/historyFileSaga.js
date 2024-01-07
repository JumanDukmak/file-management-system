import { all, call, put, takeEvery } from "redux-saga/effects";
import getHistoryFileApi from "../../api/Files/historyFileApi";
import { getHistoryFileFailure, getHistoryFileSuccess } from "../Groups/groupSlice";



function* getHistoryFileSaga(action){

    const response= yield call(getHistoryFileApi,action.payload)

    if(response.status==200 || response.status==201){
       

yield put(getHistoryFileSuccess({'history_file':response.data.history}))


    }
    else{

yield put(getHistoryFileFailure({'error':response}))
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

