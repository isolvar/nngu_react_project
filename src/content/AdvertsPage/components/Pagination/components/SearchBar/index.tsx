import React, { FC } from 'react';
import style from './SearchBar.module.scss';
import SearchIcon from './SearchIcon';

interface IProps {
  onChangeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<IProps> = ({ onChangeCallback }) => {
  return (
    <div className={style.wrapper}>
      <input
        type="search"
        placeholder="Найти объявление"
        className={style.input}
        onChange={onChangeCallback}
      />
      <div className={style.search_button}>{<SearchIcon />}</div>
    </div>
  );
};

export default SearchBar;
