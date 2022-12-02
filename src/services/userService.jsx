import axios from 'axios'

export const login = (signinObj) => {
    let response = axios.post("https://localhost:44365/api/User/Login", signinObj)
    console.log("login successfully")
    return response
}

export const register = (registerObj) => {
    let response = axios.post("https://localhost:44365/api/User/Register", registerObj)
    console.log("created successfully")
    return response
}