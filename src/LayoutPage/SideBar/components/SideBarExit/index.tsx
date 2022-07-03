import React from 'react';
import { Link } from 'react-router-dom';
import SvgSelector from '../../SvgSelector';
import style from './SideBarExit.module.scss';

const SideBarExit = () => {
  return (
    <Link to={'/'} className={style.exit}>
      <SvgSelector id="exit" className={style.svg_selector} />
      <p>Выход</p>
    </Link>
  );
};

export default SideBarExit;
