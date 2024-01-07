import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import AuthSlice from './Auth/authSlice';
import registerSlice from './Auth/registerSlice';
import groupsSlice from './Groups/groupsSlice';
import groupSlice from './Groups/groupSlice';
import filesSlice from './Files/filesSlice';
import fileSlice from './Files/fileSlice';
import usersSlice from './Users/usersSlice';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        register:registerSlice,
        groups:groupsSlice,
        group:groupSlice,
        files:filesSlice,
        file:fileSlice,
        users:usersSlice
    },
    middleware: ()=>[sagaMiddleware],
})

sagaMiddleware.run(rootSaga);
