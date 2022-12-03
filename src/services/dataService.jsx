import axios from "axios";

const headerConfig = {
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
}

export const getBookList=()=>{
    let response=axios.get("https://localhost:44365/api/Book/GetBooks",headerConfig)
    return response
}