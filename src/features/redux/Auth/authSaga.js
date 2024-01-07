import { all, call, put, takeEvery} from 'redux-saga/effects';
import authApi from '../../api/authApi';
import { LoginFailaur, LoginSuccess } from './authSlice';
import storage from '../../../utils/storage';


function* LoginSaga(action) {


   
        const response=yield call(authApi, action.payload)
        if(response.status ==200 ||  response.status == 201){

        
        storage.setToken(response.data.message.token);
        storage.setRole(response.data.message.user.roles[0].name);
        yield put(LoginSuccess({'user': response.data.message.user}))
        }
     
   else{
    console.log("error"+response)
        yield put(LoginFailaur({'error': response}))
   }
}

function* authWatcherSaga(){
    yield takeEvery('auth/LoginReguest',LoginSaga)
}

export default function* authSaga(){
    yield all([ 
        authWatcherSaga()
    ]);
}
