import React from 'react';
import style from './SearchBar.module.scss';
import SearchIcon from './SearchIcon';

const SearchBar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.searchbar}>
        <input type="search" placeholder="Найти объявление" className={style.input}></input>
      </div>
      <div className={style.search_button}>{<SearchIcon />}</div>
    </div>
  );
};

export default SearchBar;
