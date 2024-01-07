import { all, call, put, takeEvery } from "redux-saga/effects";
import { getUsersFailure, getUsersSuccess } from "./usersSlice";
import getUsersApi from "../../api/users/usersApi";



function* getUsersSaga(){

    try{
          
const response= yield call(getUsersApi)

yield put(getUsersSuccess({'users':response.data.All_Users}))


    }
    catch(error){

yield put(getUsersFailure({'error':error.message}))
    }

}


function* usersWatcherSaga(){

yield  takeEvery('users/getUsersStart',getUsersSaga)

}

export default function* usersSaga(){

yield all([

    usersWatcherSaga()
])

}

