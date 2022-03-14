import axios from "axios"

const myApi = axios.create({ baseURL: 'http://localhost:3001/api/v1' });

export function setAccessToken(token){
    myApi.defaults.headers.common = {
        Authorization: `Bearer ${token}` 
    }
}

export function normalizePath(res) {
    return res.data.body;
}

export default myApi;
