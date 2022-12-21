import axios from "axios";

const headerConfig = {
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
}

export const getBookList=()=>{
    let response=axios.get("https://localhost:44365/api/Book/GetBooks",headerConfig)
    return response
}

export const getBookById = (bookid) => {
    console.log(bookid)
    let response = axios.get(`https://localhost:44365/api/Book/GetBookbyID?bookId=${bookid}`,headerConfig);
    console.log(response)
    return response;
}

export const addToCart=(cartObj)=>{
    let response=axios.post("https://localhost:44365/api/Cart/Add",cartObj,headerConfig)
    return response
}

export const getCart=() => {
    let response = axios.get("https://localhost:44365/api/Cart/GetCart",headerConfig);
    console.log(response)
    return response;
}

export const removeCart = (cartId) => {
    let response = axios.delete(`https://localhost:44365/api/Cart/Delete?cartId=${cartId}`,headerConfig)
    console.log(response)
     return response
}

export const addToWishList = (bookid) => {
    console.log('bookID',bookid)
    let response = axios.post(`https://localhost:44365/api/Wishlist/AddToWishlist?bookId=${bookid}`,null,headerConfig)
     return response
}

export const getWishList = () => {
    let response = axios.get("https://localhost:44365/api/Wishlist/GetAllWishlist",headerConfig)
    console.log(response)
     return response
}

export const deleteWishList = (wishlistId) => {
    let response = axios.delete(`https://localhost:44365/api/Wishlist/Delete?wishlistId=${wishlistId}`,headerConfig)
    console.log(response)
     return response
}

export const addFeedback = (feebackObj) => {
    let response = axios.post("https://localhost:44365/api/Feedback/Addfeedback",feebackObj,headerConfig)
    console.log(response)
     return response
}

export const getFeedback=(bookid) => {
    let response = axios.get(`https://localhost:44365/api/Feedback/GetAllFeedBack?bookId=${bookid}`,headerConfig);
    console.log(response)
    return response;
}

export const addAddress = (addressObj) => {
    console.log("addressObj",addressObj)
    let response = axios.post("https://localhost:44365/api/Address/AddAddress",addressObj,headerConfig)
    console.log(response)
    return response
}

export const getAddress=() => {
    let response = axios.get("https://localhost:44365/api/Address/Getalladdress",headerConfig);
    console.log(response)
    return response;
}

export const addOrder = (orderObj) => {
    let response = axios.post("https://localhost:44365/api/Order/AddOrder", orderObj, headerConfig)
    console.log(response)
     return response
}
export const getOrder=() => {
    let response = axios.get("https://localhost:44365/api/Order/Getorders",headerConfig);
    console.log(response)
    return response;
}


