import axios from "axios";
import storage from "../../../utils/storage";



function readFileApi(id){
  
    return axios.get(`http://127.0.0.1:8000/api/displayFile/${id}`,
    {
    responseType: 'blob', // Set the responseType to 'blob' 
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }
    
    }
    
    
    ).then(response => (response))
    
    }
    export default readFileApi;