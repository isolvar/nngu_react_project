import React from 'react';
import avatar_image from './pic/avatar_default.png';
import style from './ProfileBlock.module.scss';

const ProfileBlock = () => {
  return (
    <div className={style.profile_block}>
      <div>
        <img src={avatar_image} />
      </div>
      <p className={style.profile_text}>Профиль</p>
    </div>
  );
};

export default ProfileBlock;
