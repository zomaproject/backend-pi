import axios from 'axios'

const clientAxios =   axios.create({
  baseURL: process.env.API_URL 
})


export default clientAxios
