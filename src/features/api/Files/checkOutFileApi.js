import axios from "axios";
import storage from "../../../utils/storage";



function checkOutFileApi(id){
  
    
   
    return axios.post(`http://127.0.0.1:8000/api/checkOut/${id}`, {}, {
        headers:{
            'Authorization': `Bearer ${storage.getToken()}`,
            'Content-Type': 'application/json'
        }
    }).then(response => (response))
    .catch(error => (error.response.data.message) // Access the data in the response
      );
  }
  export default checkOutFileApi

