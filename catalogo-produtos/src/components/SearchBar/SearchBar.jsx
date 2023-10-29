/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    if (search.length > 0) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [search]);

  return (
    <div className='search'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Busque por um livro...'
      ></input>
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.nome_do_campo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
