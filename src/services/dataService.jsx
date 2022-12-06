import axios from "axios";

const headerConfig = {
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
}

export const getBookList=()=>{
    let response=axios.get("https://localhost:44365/api/Book/GetBooks",headerConfig)
    return response
}

export const addToCart=(cartObj)=>{
    let response=axios.post("https://localhost:44365/api/Cart/Add",cartObj,headerConfig)
    return response
}

export const addToWishList = (wishlistObj) => {
    let response = axios.post(`https://localhost:44365/api/Wishlist/AddToWishlist/${wishlistObj}`,headerConfig)
     return response
}