import { all, call, put, takeEvery} from 'redux-saga/effects';
import authApi from '../../api/authApi';
import { LoginFailaur, LoginSuccess } from './authSlice';
import storage from '../../../utils/storage';


function* LoginSaga(action) {


    try{
        const response=yield call(authApi, action.payload)
        storage.setToken(response.data.message.token);
        storage.setRole(response.data.message.user.roles[0].name);
        yield put(LoginSuccess({'user': response.data.message.user}))
    } 
    catch(error){
        console.log("error"+error.message)
        yield put(LoginFailaur({'error': error.message}))
      
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
