import axios from "axios";
import storage from "../../../utils/storage";




function getUsersApi(){
    
    return axios.get('http://127.0.0.1:8000/api/showUsers',
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }
    
    }
    
    
    ).then(response => (response)).catch(error => (error.response.data.message))
    
    }
    export default getUsersApi;