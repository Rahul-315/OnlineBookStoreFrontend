import axios from "axios";

const API_URL = "http://localhost:8080/api/books";

export const getBooks = () => axios.get(API_URL);
export const addBook = (book) => axios.post(API_URL, book);
export const updateBook = (id, book) => axios.put(`${API_URL}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
export const searchByTitle = (title) => axios.get(`${API_URL}/search/title?title=${title}`);
export const searchByAuthor = (author) => axios.get(`${API_URL}/search/author?author=${author}`);
