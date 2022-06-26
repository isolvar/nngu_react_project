import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './SideBar.module.scss';
import SvgSelector from './SvgSelector';

const SideBar = () => {
  const location = useLocation();

  let svgColor, pColor;
  if (location.pathname === '/adverts') {
    svgColor = style.svg_blue;
    pColor = style.p_blue;
  } else {
    svgColor = style.svg_grey;
    pColor = style.p_grey;
  }

  return (
    <div className={style.sidebar}>
      <div className={style.login_block}></div>
      <Link to={'/adverts'} className={`${style.advert_link} ${style.adverts}`}>
        <SvgSelector id="adverts" className={`${style.svg_selector} ${svgColor}`} />
        <p className={pColor}>Объявления</p>
      </Link>
      <Link to={'/'} className={style.exit}>
        <SvgSelector id="exit" className={style.svg_selector} />
        <p>Выход</p>
      </Link>
    </div>
  );
};

export default SideBar;
