import React, { useState } from "react";
import { addBook } from "../api/bookApi";

function AddBook() {
  const [book, setBook] = useState({ title: "", author: "", price: "", stock: "", category: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    setBook({ title: "", author: "", price: "", stock: "", category: "" });
    window.location.reload();
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
        <input name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
        <input name="price" type="number" value={book.price} onChange={handleChange} placeholder="Price" required />
        <input name="stock" type="number" value={book.stock} onChange={handleChange} placeholder="Stock" required />
        <input name="category" value={book.category} onChange={handleChange} placeholder="Category" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
