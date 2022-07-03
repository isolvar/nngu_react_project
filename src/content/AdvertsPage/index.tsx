import React from 'react';
import style from './AdvertsPage.module.scss';
import AdvertItem from './components/AdvertItem';
import Button from './components/Button';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';

const AdvertsPage = () => {
  return (
    <div className={style.content_wrapper}>
      <div className={style.head}>
        <div>
          <p className={style.text1}>Объявления</p>
          <p className={style.text2}>Всего:</p>
        </div>
        <Button />
      </div>
      <div className={style.search_pagination_block}>
        <SearchBar />
        <Pagination pageNumber={1} totalAmount={1} />
      </div>
      <SortBar />
      <AdvertItem />
    </div>
  );
};

export default AdvertsPage;
