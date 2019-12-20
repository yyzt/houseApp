import axios from 'axios'
// 本地接口
axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const loginReq = (param)=>axios.post('/login',param);

