import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
// import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  // const { name } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    
    const products = await fetchProducts(searchValue);
    console.log(products);
  }

  return (
      <form className='search-bar' onSubmit={handleSearch}>
        <input
          type='search'
          value={searchValue}
          placeholder='Buscar produtos'
          className='search_input'
          onChange={({target}) => setSearchValue(target.value)}
          required
        />
        <button type='submit' className='search_button'>
          <BsSearch />
        </button>
      </form>
  );
}

export default SearchBar;