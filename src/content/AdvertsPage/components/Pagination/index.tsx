import React, { FC, useState } from 'react';
import { IAdvertsState } from '../../../../store/advertsSlice';
import AdvertItem from './components/AdvertItem';
import Paging from './components/Paging';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import style from './Pagination.module.scss';

interface IProps {
  data: IAdvertsState;
  limit: number;
}

const Pagination: FC<IProps> = ({ data, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  let products = data.products;

  if (searchText) {
    products = products.filter((elem) => {
      if (elem.title.toLowerCase().includes(searchText.toLowerCase())) return elem;
    });
  }

  const productsAmount = products.length;

  const maxPages = Math.ceil(productsAmount / limit);
  const fromItem = limit * (currentPage - 1) + 1;
  const toItem = limit * currentPage > productsAmount ? productsAmount : limit * currentPage;

  const pagesToShow = [];
  for (let i = fromItem - 1; i < toItem && i < products.length; i++) {
    const { id, title, price, category } = products[i];
    pagesToShow.push(
      <AdvertItem key={`k${id}`} name={title} category={category} price={price} publicated={'Да'} />
    );
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(() => event.target.value);

  const handlePageForward = () => setCurrentPage((page) => (page < maxPages ? page + 1 : page));
  const handlePageBackward = () => setCurrentPage((page) => (page !== 1 ? page - 1 : page));

  return (
    <>
      <div className={style.search_pagination_block}>
        <SearchBar onChangeCallback={handleSearch} />
        <Paging
          from={fromItem}
          to={toItem}
          total={productsAmount}
          handlerBack={handlePageBackward}
          handlerNext={handlePageForward}
        />
      </div>
      <SortBar />
      {pagesToShow}
    </>
  );
};

export default Pagination;
