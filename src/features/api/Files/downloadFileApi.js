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
    // const errorMessage = JSON.parse(response).message;
    .catch(error =>{
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              const data = JSON.parse(reader.result);
              console.log(data);
              console.log(error.response.status);
              resolve({ data, status: error.response.status });
            };
            reader.readAsText(error.response.data);
          });
        });
           
    
    
    }
    export default downloadFileApi;
    