import axios from 'axios'

const BASE_URL = 'http://localhost:300'

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/users/${id}`)

export {
  registerUserService,
  loginUserService,
  getSingleUser
}
