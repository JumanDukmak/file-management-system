import axios from "axios";
import storage from "../../../utils/storage";




function removeMemberApi(ids){

    return axios.delete(`http://127.0.0.1:8000/api/deleteMember/${ids.id_user}/group/${ids.id_group}`,
    {
    
    headers:{
        'Authorization': `Bearer ${storage.getToken()}`,
        'Content-Type': 'application/json'
    }}
    
    
    ).then(response => (response))
    .catch(error =>(error.response.data.message) )
    
    }
    export default removeMemberApi;