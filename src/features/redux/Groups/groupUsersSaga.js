import { all, call, put, takeEvery } from "redux-saga/effects";
import {  getGroupUsersFailure, getGroupUsersSuccess } from "./groupSlice";
import getGroupUsersApi from "../../api/Groups/groupUserApi";



function* getGroupUsersSaga(action){

    try{
       
      
        
      
const response= yield call(getGroupUsersApi,action.payload)

 yield put(getGroupUsersSuccess({'group_users':response.data.Users_Group}))


    }
    catch(error){

yield put(getGroupUsersFailure({'error':error.message}))
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

