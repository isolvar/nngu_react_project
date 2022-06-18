import React from 'react';
import style from './Header.module.scss';
import common_style from '../../common/Common.module.scss';
import logo from '../../common/pic/Logo.png';
import ProfileBlock from './ProfileBlock';

const Header = () => {
  console.log(style);
  return (
    <header className={style.header}>
      <div className={`${common_style.container} ${style.header_items}`}>
        <img src={logo} alt="logo" />
        <ProfileBlock />
      </div>
    </header>
  );
};

export default Header;
