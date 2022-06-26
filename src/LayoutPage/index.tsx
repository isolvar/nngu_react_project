import React from 'react';
import Footer from './Footer';
import Header from './Header';
import style from './LayoutPage.module.scss';
import common_style from '../common/Common.module.scss';
import SideBar from './SideBar';

const LayoutPage = () => {
  return (
    <div className={style.layout}>
      <Header />
      <div className={`${common_style.container} ${style.sidebar_content}`}>
        <SideBar />
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
