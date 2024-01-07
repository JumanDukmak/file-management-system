import { all, call, put, takeEvery } from "redux-saga/effects";
import {  getGroupUsersFailure, getGroupUsersSuccess } from "./groupSlice";
import getGroupUsersApi from "../../api/Groups/groupUserApi";



function* getGroupUsersSaga(action){

    const response= yield call(getGroupUsersApi,action.payload)

    if(response.status==200 || response.status==201){
       

 yield put(getGroupUsersSuccess({'group_users':response.data.Users_Group}))

    }
   else{

yield put(getGroupUsersFailure({'error':response}))
    }

}


function* groupUsersWatcherSaga(){

yield  takeEvery('group/getGroupUsersStart',getGroupUsersSaga)

}

export default function* groupUsersSaga(){

yield all([

    groupUsersWatcherSaga()
])

}

