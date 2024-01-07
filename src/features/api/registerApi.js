import axios from "axios";



function RegisterApi(name,email,user_name,password){

    return axios.post("http://127.0.0.1:8000/api/auth/register",{name,email,user_name,password})
    .then(response =>( response)).catch(error =>(error.response.data.message))
    
    
    }
    export default RegisterApi;