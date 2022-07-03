import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SvgSelector from '../../SvgSelector';
import style from './SideBarItem.module.scss';

const SideBarItem = () => {
  const location = useLocation();

  let svgColor, pColor;
  if (location.pathname === '/login/adverts') {
    svgColor = style.svg_blue;
    pColor = style.p_blue;
  } else {
    svgColor = style.svg_grey;
    pColor = style.p_grey;
  }

  return (
    <Link to={'/login/adverts'} className={`${style.advert_link} ${style.adverts}`}>
      <SvgSelector id="adverts" className={`${style.svg_selector} ${svgColor}`} />
      <p className={pColor}>Объявления</p>{' '}
    </Link>
  );
};

export default SideBarItem;
