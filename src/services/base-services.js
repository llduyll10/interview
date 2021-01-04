import axios from 'axios'

const apiBase = axios.create({
    baseURL: (process.env.VUE_APP_ROOT_API_DEV !== undefined) ? process.env.VUE_APP_ROOT_API_DEV : process.env.VUE_APP_ROOT_API_DEV
})
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


export default apiBase




