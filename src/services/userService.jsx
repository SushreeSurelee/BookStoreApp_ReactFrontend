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

export const forget = (fotgetObj) => {
    let response = axios.post(`https://localhost:44365/api/User/ForgotPassword?email=${fotgetObj}`, fotgetObj)
    console.log("forget password email sent successfully")
    return response
}