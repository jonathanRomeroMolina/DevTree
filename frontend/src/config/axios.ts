//la base de axios
import axios from 'axios'

const api = axios.create({ //esto va a crear una base de axios
    baseURL: import.meta.env.VITE_API_URL
})

export default api