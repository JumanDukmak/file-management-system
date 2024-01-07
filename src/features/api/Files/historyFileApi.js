import axios from "axios";
import storage from "../../../utils/storage";


function getHistoryFileApi(id){


    return axios.get(`http://127.0.0.1:8000/api/showHistory/${id}`,
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }
    
    }
    
    
    ).then(response => (response))
    
    }
    export default getHistoryFileApi;