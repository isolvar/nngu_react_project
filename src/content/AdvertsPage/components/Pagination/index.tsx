import React, { FC } from 'react';
import ArrowSvg from './components/ArrowSvg';
import style from './Pagination.module.scss';

interface IProps {
  pageNumber: number;
  totalAmount: number;
}

const Pagination: FC<IProps> = () => {
  return (
    <div className={style.wrapper}>
      <p> ? - ? из ??? </p>
      <div className={style.arrow_left}>
        <ArrowSvg id={'left'} />
      </div>
      <div className={style.arrow_right}>
        <ArrowSvg id={'right'} />
      </div>
    </div>
  );
};

export default Pagination;
