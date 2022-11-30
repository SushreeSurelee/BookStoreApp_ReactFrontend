import axios from 'axios'

export const login = (signinObj) => {
    let response = axios.post("https://localhost:44365/api/User/Login", signinObj)
    console.log("login successfully")
    return response
}