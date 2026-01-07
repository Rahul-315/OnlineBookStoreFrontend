import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import SearchBook from "./components/SearchBook";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <div className="container">
      <h1>Online Bookstore</h1>
      <AddBook />
      <SearchBook />
      <BookList />
      <UpdateBook />
    </div>
  );
}

export default App;
