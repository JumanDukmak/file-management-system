import axios from "axios";
import storage from "../../../utils/storage";




function updateFileApi(formData,id){


    return axios.post(`http://127.0.0.1:8000/api/updateFile/${id}`,formData,
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'multipart/form-data'
    },    }
 
    ).then(response => (response))
    
    }
    export default updateFileApi;