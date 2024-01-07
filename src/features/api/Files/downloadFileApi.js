import axios from "axios";
import storage from "../../../utils/storage";



function downloadFileApi(id){

    return axios.get(`http://127.0.0.1:8000/api/downloadFile/${id}`,
    
    {
        responseType: 'blob',//Set the responseType to 'blob' for file downloads
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }
    
    }
    
    
    ).then(response => (response))
    
    }
    export default downloadFileApi;
    