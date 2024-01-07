import { all, call, put, takeEvery } from "redux-saga/effects"

import { RegisterFailure, RegisterSuccess } from "./registerSlice";
import RegisterApi from "../../api/registerApi";
import storage from "../../../utils/storage";


function* getRegisterSaga(action){
try{
 

const response=yield call(RegisterApi,action.payload.name ,action.payload.email,action.payload.user_name,action.payload.password)

console.log("status register is "+ response.status)

console.log(response.data.data.token)

storage.setToken(response.data.data.token);
      
storage.setRole(response.data.data.role)

yield put(RegisterSuccess({'user':response.data.data.user}))


}
catch(error){
  yield put(RegisterFailure({'error':error.message}))
}



}


function* registerWatcherSaga(){
    yield takeEvery('register/RegisterReguest',getRegisterSaga)
}

export function* registerSaga(){
yield all([

registerWatcherSaga()

])

}