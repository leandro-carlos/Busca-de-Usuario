import axios from "axios";

const baseUrl = "http://192.168.1.2:3000"

const api = axios.create({
    baseURL: baseUrl
})

export default api;