import { all, call, put, takeEvery } from "redux-saga/effects";
import { addGroupFailure, addGroupStart, addGroupSuccess } from "./groupsSlice";
import addGroupsApi from "../../api/Groups/addGroupApi";



function* addGroupSaga(action){

    try{
             
 const response= yield call(addGroupsApi,action.payload.name,action.payload.user_list,action.payload.file_list)



    yield put(addGroupSuccess(response.data))




    }
    catch(error){

     

        yield put(addGroupFailure({'error': error.message}))
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

