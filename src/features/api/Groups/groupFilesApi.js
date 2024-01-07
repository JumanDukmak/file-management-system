import axios from "axios";
import storage from "../../../utils/storage";



function getGroupFilesApi(id){

    return axios.get(`http://127.0.0.1:8000/api/showGroupFiles/${id}`,
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }}
    
    ).then(response => (response))
    
    }
    export default getGroupFilesApi