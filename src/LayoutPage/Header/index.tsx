import React from 'react';
import style from './Header.module.scss';
import common_style from '../../common/Common.module.scss';
import logo from '../../common/pic/Logo.png';
import ProfileBlock from './ProfileBlock';
import { useLocation } from 'react-router-dom';
import LoginBlock from './LoginBlock';
import { Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const rightBock = location.pathname === '/' ? <LoginBlock /> : <ProfileBlock />;

  return (
    <header className={style.header}>
      <div className={`${common_style.container} ${style.header_items}`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {rightBock}
      </div>
    </header>
  );
};

export default Header;
