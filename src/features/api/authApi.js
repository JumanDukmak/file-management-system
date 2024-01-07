import axios from 'axios'

function authApi(payload) {

    return axios.post('http://127.0.0.1:8000/api/auth/login',payload)
    .then(response => ( response ))
    }

export default authApi



