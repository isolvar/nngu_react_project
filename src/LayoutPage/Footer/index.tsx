import React from 'react';
import style from './Footer.module.scss';
import common_style from '../../common/Common.module.scss';
import logo from '../../common/pic/Logo.png';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`${common_style.container} ${style.footer_logo}`}>
        <div className={style.footer_logo_wrapper}>
          <img src={logo} alt="logo" />
          <div className={style.vl}></div>
          <p className={style.footer_text}>Доска объявлений</p>
        </div>
        <p className={style.footer_text}>&copy; ООО «Доска диджитал», 2022</p>
      </div>
    </div>
  );
};

export default Footer;
