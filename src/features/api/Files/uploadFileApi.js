import axios from "axios";
import storage from "../../../utils/storage";





function uploadFileApi(formData){

    return axios.post('http://127.0.0.1:8000/api/uploadFile',formData,
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'multipart/form-data'
    }, }
    
    
    ).then(response => (response)).catch(error =>(error.response.data.message) )
    
    }
    export default uploadFileApi;