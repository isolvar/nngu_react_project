import React from 'react';
import style from './AdvertItem.module.scss';

const AdvertItem = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.cell} ${style.group1} ${style.group_text}`}>
        <b>Название объявления</b>
      </div>
      <div className={`${style.cell} ${style.group2} ${style.group_text}`}>Категория</div>
      <div className={`${style.cell} ${style.group3} ${style.group_text}`}>Стоимость, $/шт.</div>
      <div className={`${style.cell} ${style.group4} ${style.group_text}`}>Да</div>
    </div>
  );
};

export default AdvertItem;
