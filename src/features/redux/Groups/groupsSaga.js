import { all, call, put, takeEvery } from "redux-saga/effects";
import {  getGroupsFailure, getGroupsSuccess } from "./groupsSlice";
import getGroupsApi from "../../api/Groups/groupsApi";



function* getGroupsSaga(){

    try{
           
const response= yield call(getGroupsApi)


yield put(getGroupsSuccess({'groups':response.data.Groups}))


    }
    catch(error){
        yield put(getGroupsFailure({'error':error.message}))


    }

}


function* groupsWatcherSaga(){

yield  takeEvery('groups/getGroupsStart',getGroupsSaga)

}

export default function* groupsSaga(){

yield all([

    groupsWatcherSaga()
])

}

