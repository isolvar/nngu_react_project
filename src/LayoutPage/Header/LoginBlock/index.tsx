import React from 'react';
import { Link } from 'react-router-dom';
import style from './LoginBlock.module.scss';

const LoginBlock = () => {
  return (
    <div className={style.login_block}>
      <Link to="/login" className={style.login_link}>
        Войти
      </Link>
    </div>
  );
};

export default LoginBlock;
