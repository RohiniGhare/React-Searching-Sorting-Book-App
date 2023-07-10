import axios from "axios";
const url = "http://68.178.162.203:8080/application-test-v1.1/books";

const getBooks = ()=>{
    return axios.get(url);
}

const postBook= (book)=>{
    return axios.post(url,book);
}

const putBook= (book)=>{
    return axios.put(url,book);
}

export {getBooks, postBook, putBook};