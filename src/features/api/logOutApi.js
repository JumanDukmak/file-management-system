import axios from "axios";
import storage from "../../utils/storage";



function LogOutApi(){

    return axios.delete('http://127.0.0.1:8000/api/auth/logout',
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }
    
    }
    
    
    ).then(response => (response))
    
    }
    export default LogOutApi;