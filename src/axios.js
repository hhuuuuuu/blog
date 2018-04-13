import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3030'
})

instance.interceptors.response.use(
    res => {
        if (res.data.code === 0) {
            return res.data.data
        } else {
            return Promise.reject(res.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance
