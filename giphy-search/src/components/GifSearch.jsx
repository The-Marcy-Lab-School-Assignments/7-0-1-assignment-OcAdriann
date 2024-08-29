import React, { useState } from 'react';

function GifSearch({ onSearch, setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  );
}

export default GifSearch;
