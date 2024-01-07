import axios from "axios";
import storage from "../../../utils/storage";



function updateGroupApi(id, name,user_list,file_list){
  
    
   
    return axios.post(`http://127.0.0.1:8000/api/update/group/${id}`, {name,user_list,file_list}, {
        headers:{
            'Authorization': `Bearer ${storage.getToken()}`,
            'Content-Type': 'application/json'
        }
        
    }).then(response => (response)).catch(error =>(error.response.data.message) )
  }
  export default updateGroupApi

