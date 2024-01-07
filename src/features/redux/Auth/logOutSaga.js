

import {  all, call, put, takeEvery} from 'redux-saga/effects';
import { LogOutFailaur, LogOutSuccess } from "./authSlice";
import LogOutApi from '../../api/logOutApi';



function* LogOutSaga() {

    const response=yield call(LogOutApi)   

if(response.status ==200 || response.status ==201){

localStorage.removeItem('token');
localStorage.removeItem('role');
// متل مو متكوبة بالسلايس 
yield put(LogOutSuccess({'message':response.data.message}))


}
else{
console.log(response)
yield put(LogOutFailaur({'error':response}))



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