import React from "react";
import AddBook from "./components/AddBook";
import SearchBook from "./components/SearchBook";
import UpdateBook from "./components/UpdateBook";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      
      <section id="add">
        <AddBook />
      </section>
      
      <section id="search">
        <SearchBook />
      </section>
      
      <section id="update">
        <UpdateBook />
      </section>
      
      <section id="list">
        <BookList />
      </section>
    </div>
  );
}

export default App;
