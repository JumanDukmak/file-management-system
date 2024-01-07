

import {  all, call, put, takeEvery} from 'redux-saga/effects';
import { LogOutFailaur, LogOutSuccess } from "./authSlice";
import LogOutApi from '../../api/logOutApi';



function* LogOutSaga() {

    

try{

const response=yield call(LogOutApi)

localStorage.removeItem('token');
localStorage.removeItem('role');
// متل مو متكوبة بالسلايس 
yield put(LogOutSuccess({'message':response.data.message}))


}
catch(error){

yield put(LogOutFailaur({'error':error.message}))



}





}


function* logOutWatcherSaga(){
    yield takeEvery('auth/LogOutReguest',LogOutSaga)
}

export default function* log_OutSaga(){

yield all([ 
    logOutWatcherSaga()
]);

}