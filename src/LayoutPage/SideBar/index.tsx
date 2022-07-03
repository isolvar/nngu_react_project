import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginBlock from './components/LoginBlock';
import SideBarExit from './components/SideBarExit';
import SideBarItem from './components/SideBarItem/SideBarItem';
import style from './SideBar.module.scss';

const SideBar = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1]; // login

  return (
    <div className={style.sidebar}>
      <LoginBlock />
      {path === 'login' ? <SideBarItem /> : <></>}
      {path === 'login' ? <SideBarExit /> : <></>}
    </div>
  );
};

export default SideBar;
