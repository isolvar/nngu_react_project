import React from 'react';
import style from './LoginBlock.module.scss';

const LoginBlock = () => {
  return (
    <div className={style.login_block}>
      <div>
        <img src="http://localhost:5555/user-icon" />
      </div>
      <div className={style.texts}>
        <p className={style.profile_name}>Super admin</p>
        <p className={style.profile_text}>Админ-меню</p>
      </div>
    </div>
  );
};

export default LoginBlock;
