import React, { useState } from "react";
import { updateBook } from "../api/bookApi";

function UpdateBook() {
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    price: "",
    stock: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!book.id) {
      alert("Please enter the Book ID to update.");
      return;
    }

    try {
      await updateBook(book.id, {
        title: book.title,
        author: book.author,
        price: book.price,
        stock: book.stock,
        category: book.category,
      });

      alert("Book updated successfully!");
      setBook({
        id: "",
        title: "",
        author: "",
        price: "",
        stock: "",
        category: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book. Check console for details.");
    }
  };

  return (
    <div className="update-book">
      <h2>Update Book Details</h2>
      <form onSubmit={handleUpdate}>
        <input
          name="id"
          value={book.id}
          onChange={handleChange}
          placeholder="Book ID"
          required
        />
        <input
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          name="price"
          type="number"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          name="stock"
          type="number"
          value={book.stock}
          onChange={handleChange}
          placeholder="Stock"
        />
        <input
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default UpdateBook;
