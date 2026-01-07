import React, { useState } from "react";
import { searchByTitle } from "../api/bookApi";

function SearchBook() {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await searchByTitle(title);
    setResults(response.data);
  };

  return (
    <div className="search-book">
      <h2>Search Book by Title</h2>
      <input
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <ul>
          {results.map((book) => (
            <li key={book.id}>
              {book.title} - {book.author} (${book.price})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBook;
