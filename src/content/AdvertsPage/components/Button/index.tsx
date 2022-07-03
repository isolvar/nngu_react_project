import React from 'react';
import style from './Button.module.scss';

interface IProps {
  onClick?: () => void;
}

const Button = ({ onClick }: IProps) => {
  return (
    <div onClick={onClick} className={style.button_wrapper}>
      <p className={style.text}>Добавить</p>
      <p className={style.plus}>+</p>
    </div>
  );
};

export default Button;
