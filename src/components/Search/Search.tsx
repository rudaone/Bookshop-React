import { useState } from 'react';
import './Search.css'
import { SearchIcon } from '../Icons/Search';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');

  return (
    <div className='search__wrapper'>
      <input
        className='search__input'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/books/search-results?search=${search}`)
            
            
          }
        }} />
      <a href='' className='search__icon'>
        <SearchIcon />
      </a>

    </div>

  );
};

export { Search }

