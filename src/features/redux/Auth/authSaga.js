import { takeEvery, all, call, put } from "redux-saga/effects";
import { LoginFailaur, LoginSuccess } from "./authSlice";
import authApi from "../../api/authApi";

function* login(action) {
    console.log(action);
    try {
        const response = yield call(
            authApi,
            action.payload.user_name,
            action.payload.password
        );
        console.log('in saga: ' + response);
        const token = response.data.data.token;
        yield put(LoginSuccess({ token: token }));
    } catch (error) {
        console.log(error);
        yield put(LoginFailaur( ));
    }
}

function* authWatecherSaga() {
    yield takeEvery("auth/LoginRequest", login);
}

export default function* authSaga() {
    yield all([authWatecherSaga()]);
}
