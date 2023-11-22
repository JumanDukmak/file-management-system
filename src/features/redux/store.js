import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import AuthSlice from './Auth/authSlice';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
    },
    middleware: ()=>[sagaMiddleware],
})

sagaMiddleware.run(rootSaga);