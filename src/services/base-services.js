import axios from 'axios'

const apiBase = axios.create({
    baseURL: (process.env.VUE_APP_ROOT_API_DEV !== undefined) ? process.env.VUE_APP_ROOT_API_DEV : process.env.VUE_APP_ROOT_API_DEV
})
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';




export default apiBase




