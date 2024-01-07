import axios from "axios";
import storage from "../../../utils/storage";



function multiCheckInFileApi(ids){
  console.log("in api "+ids)
    return axios.post('http://127.0.0.1:8000/api/multiCheckIn', {file_list:ids}, {
        headers:{
            'Authorization': `Bearer ${storage.getToken()}`,
            'Content-Type': 'application/json'
        }
    }).then(response => (response))
     .catch(error =>(error.response.data.message) )
  }
  export default multiCheckInFileApi