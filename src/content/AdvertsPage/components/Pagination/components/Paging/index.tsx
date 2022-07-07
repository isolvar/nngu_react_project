import React, { FC } from 'react';
import ArrowSvg from '../ArrowSvg';
import style from './Paging.module.scss';

interface IProps {
  from: number;
  to: number;
  total: number;
  handlerBack: () => void;
  handlerNext: () => void;
}

const Paging: FC<IProps> = ({ from, to, total, handlerBack, handlerNext }) => {
  return (
    <div className={style.wrapper}>
      <p>{`${from} - ${to} из ${total}`}</p>
      <div className={style.arrow_left} onClick={handlerBack}>
        <ArrowSvg id={'left'} />
      </div>
      <div className={style.arrow_right} onClick={handlerNext}>
        <ArrowSvg id={'right'} />
      </div>
    </div>
  );
};

export default Paging;
