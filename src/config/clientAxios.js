import axios from 'axios'

const clientAxios =   axios.create({
  baseURL: 'https://api.spoonacular.com' 
})


export default clientAxios
