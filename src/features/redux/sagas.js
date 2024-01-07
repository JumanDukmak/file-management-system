import { all, fork } from 'redux-saga/effects';
import authSaga from './Auth/authSaga';
import { registerSaga } from './Auth/registerSaga';
import groupsSaga from './Groups/groupsSaga';
import Update_GroupSaga from './Groups/updateGroupSaga';
import groupFilesSaga from './Groups/groupFilesSaga';
import filesSaga from './Files/filesSaga';
import log_OutSaga from './Auth/logOutSaga';
import read_FileSaga from './Files/readFileSaga';
import usersSaga from './Users/usersSaga';
import groupUsersSaga from './Groups/groupUsersSaga';
import add_groupSaga from './Groups/addGroupSaga';
import delete_GroupSaga from './Groups/deleteGroupSaga';
import remove_MemberSaga from './Groups/removeMemberSaga';
import remove_FileSaga from './Groups/removeFileSaga';
import delete_FileSaga from './Files/deleteFileSaga';
import download_FileSaga from './Files/downloadFileSaga';
import upload_FileSaga from './Files/uploadFileSaga';
import update_FileSaga from './Files/updateFileSaga';
import checkIn_FileSaga from './Files/checkInFileSaga';
import checkOut_FileSaga from './Files/checkOutFileSaga';
import multiCheckIn_FileSaga from './Files/multiCheckInSaga';
import history_FileSaga from './Files/historyFileSaga';


export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(registerSaga),
        fork(groupsSaga),
        fork(Update_GroupSaga),
        fork(groupFilesSaga),
        fork(filesSaga),
        fork(log_OutSaga),
        fork(read_FileSaga),
        fork(usersSaga),
        fork(groupUsersSaga),
        fork(add_groupSaga),
        fork(delete_GroupSaga),
        fork(remove_MemberSaga),
        fork(remove_FileSaga),
        fork(delete_FileSaga),
        fork(download_FileSaga),
        fork(upload_FileSaga),
        fork(update_FileSaga),
        fork(checkIn_FileSaga),
        fork(checkOut_FileSaga),
        fork(multiCheckIn_FileSaga),
        fork(history_FileSaga)
 
    ]);
}
