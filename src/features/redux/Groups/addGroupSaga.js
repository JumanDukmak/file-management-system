import { all, call, put, takeEvery } from "redux-saga/effects";
import { addGroupFailure, addGroupStart, addGroupSuccess } from "./groupsSlice";
import addGroupsApi from "../../api/Groups/addGroupApi";



function* addGroupSaga(action){


    const response= yield call(addGroupsApi,action.payload.name,action.payload.user_list,action.payload.file_list)

    if(response.status==200 || response.status==201){
             
    yield put(addGroupSuccess(response.data))

    }
    else{
        yield put(addGroupFailure({'error': response}))
    }

}


function* addgroupWatcherSaga(){

yield  takeEvery('groups/addGroupStart',addGroupSaga)

}

export default function* add_groupSaga(){

yield all([

    addgroupWatcherSaga()
])

}

