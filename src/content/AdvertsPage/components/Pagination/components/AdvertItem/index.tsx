import React, { FC } from 'react';
import style from './AdvertItem.module.scss';

interface IProps {
  name: string;
  category: string;
  price: number;
  publicated: string;
}

const AdvertItem: FC<IProps> = (props) => {
  const { name, category, price, publicated } = props;

  return (
    <div className={style.wrapper}>
      <div className={`${style.cell} ${style.group1} ${style.group_text}`}>
        <b>{name}</b>
      </div>
      <div className={`${style.cell} ${style.group2} ${style.group_text}`}>{category}</div>
      <div className={`${style.cell} ${style.group3} ${style.group_text}`}>{price}, $/шт.</div>
      <div className={`${style.cell} ${style.group4} ${style.group_text}`}>{publicated}</div>
    </div>
  );
};

export default AdvertItem;
