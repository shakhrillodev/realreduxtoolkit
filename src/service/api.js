import axios from "axios";
import { getItem } from "../helpers/persistent-localstorage";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use( config =>{
    const token = getItem('token')
    config.headers.Authorization = `Token ${ token ? token : ''}`
    return config
})

export default axios