const { default: axios } = require("axios");



const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})

