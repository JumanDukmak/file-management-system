import { all, call, put, takeEvery} from 'redux-saga/effects';
import authApi from '../../api/authApi';
import { LoginFailaur, LoginSuccess } from './authSlice';


function* LoginSaga(action) {

    console.log('in : LoginSaga')

    try{
        const response=yield call(authApi, action.payload)
        localStorage.setItem('token',JSON.stringify(response.data.message.token));
        yield put(LoginSuccess({'user': response.data.message.user}))
    } 
    catch(error){
        yield put(LoginFailaur({'error': error.data.message}))
        console.log(error)
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