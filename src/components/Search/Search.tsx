import { useState } from 'react';
import './Search.css'
import { CancelIcon } from '../Icons/CancelIcon';
import { SearchIcon } from '../Icons/Search';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const navigate = useNavigate();


  return (
    <div className='search__wrapper'>
      <Input
        className='search__input'
        placeholder='Search'
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            navigate(`/books/search-results?search=${value}`);
          }
        }}
      />
      <a href='' className='search__icon'>
        <SearchIcon />
      </a>

    </div>

  );
};

export { Search }
