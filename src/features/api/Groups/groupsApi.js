import axios from "axios";
import storage from "../../../utils/storage";



function getGroupsApi(){

    return axios.get('http://127.0.0.1:8000/api/showGroups',
    {
      headers:{                       
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
     } }
    ).then(response => (response))
    }
    export default getGroupsApi




    