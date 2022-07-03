import React, { useState } from 'react';
import FilterMark from './components/FilterMark';
import style from './SortBar.module.scss';

const SortBar = () => {
  const [filterMark, setFilterMark] = useState({ isFiltered: false, group: null });

  const emptyFilterBlock = <div className={style.empty_block}></div>;

  const filterMark1 = filterMark.group === 1 ? <FilterMark /> : emptyFilterBlock;
  const filterMark2 = filterMark.group === 2 ? <FilterMark /> : emptyFilterBlock;
  const filterMark3 = filterMark.group === 3 ? <FilterMark /> : emptyFilterBlock;
  const filterMark4 = filterMark.group === 4 ? <FilterMark /> : emptyFilterBlock;

  return (
    <div className={style.wrapper}>
      <div className={`${style.cell} ${style.group1} ${style.group_text}`}>Название объявления</div>
      {filterMark1}
      <div className={`${style.cell} ${style.group2} ${style.group_text}`}>Категория</div>
      {filterMark2}
      <div className={`${style.cell} ${style.group3} ${style.group_text}`}>Стоимость, $/шт.</div>
      {filterMark3}
      <div className={`${style.cell} ${style.group4} ${style.group_text}`}>Публикация</div>
      {filterMark4}
    </div>
  );
};

export default SortBar;
