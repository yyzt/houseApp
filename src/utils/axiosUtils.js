import axios from 'axios'

axios.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token');
    if(token){
        req.headers.token=token;
    }
    return req;
})

axios.interceptors.response.use((res)=>{
    return res.data;
})