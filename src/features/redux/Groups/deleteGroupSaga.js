import { all, call, put, takeEvery } from "redux-saga/effects";
import { deleteGroupFailure, deleteGroupSuccess } from "./groupsSlice";
import deleteGroupApi from "../../api/Groups/deleteGroupApi";



function* deleteGroupSaga(action){

    
const response= yield call(deleteGroupApi,action.payload)


if(response.status ==200 || response.status == 201){
 yield put(deleteGroupSuccess(response.data))

}
else{
    yield put(deleteGroupFailure({'error':response}))
}
    }
    


function* deleteGroupWatcherSaga(){

yield  takeEvery('groups/deleteGroupStart',deleteGroupSaga)

}

export default function* delete_GroupSaga(){

yield all([

    deleteGroupWatcherSaga()
])

}

