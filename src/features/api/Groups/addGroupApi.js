import axios from "axios";
import storage from "../../../utils/storage";




function addGroupsApi(name,user_list,file_list){

    return axios.post('http://127.0.0.1:8000/api/create/group',{
        name: name,
        user_list: user_list,
        file_list: file_list
    },
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    },}
    
    
    ).then(response => (response)).catch(error =>(error.response.data.message) )
    
    }
    export default addGroupsApi;