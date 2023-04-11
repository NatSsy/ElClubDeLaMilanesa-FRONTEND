import axios from "axios"

const menuApi = axios.create({
    baseURL:"http://localhost:4000/",
})

export default menuApi