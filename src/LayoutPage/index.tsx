import React, { FC } from 'react';
import Footer from './Footer';
import Header from './Header';
import style from './LayoutPage.module.scss';
import common_style from '../common/Common.module.scss';
import SideBar from './SideBar';
import AdvertsPage from '../content/AdvertsPage';
import { useLocation } from 'react-router-dom';

const LayoutPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const contentPage = path === '/login/adverts' ? <AdvertsPage /> : <div></div>;

  return (
    <div className={style.layout}>
      <Header />
      <div className={`${common_style.container} ${style.sidebar_content}`}>
        <SideBar />
        <div className="content">{contentPage}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
