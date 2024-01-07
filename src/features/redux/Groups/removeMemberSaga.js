import { all, call, put, takeEvery } from "redux-saga/effects";
import {  removeMemberFailure, removeMemberSuccess } from "./groupSlice";
import removeMemberApi from "../../api/Groups/removeMemberApi";


function* removeMemberSaga(action){

     const response= yield call(removeMemberApi,action.payload)
     
     if(response.status == 200 || response.status == 201){
      yield put(removeMemberSuccess(response.data))
     }
   else{

yield put(removeMemberFailure({'error':response}))
   
   }
}


function* removeMemberWatcherSaga(){

yield  takeEvery('group/removeMemberStart',removeMemberSaga)

}

export default function* remove_MemberSaga(){

yield all([

    removeMemberWatcherSaga()
])

}

