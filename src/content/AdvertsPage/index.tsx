import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from '../../share/Loader';
import { advertsActions, IReturnedAdvertsState } from '../../store/advertsSlice';
import style from './AdvertsPage.module.scss';
import Button from './components/Button';
import Pagination from './components/Pagination';

const AdvertsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const state = useSelector((state: IReturnedAdvertsState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:5555/goods'); // get the data from the api
      const newState = await data.json(); // convert the data to json

      function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      await sleep(2000);

      dispatch(advertsActions.setState(newState)); // set state with the result

      setIsLoading(false);
    };

    fetchData().catch(console.error);

    return () => {
      dispatch(advertsActions.clearState());
    };
  }, []);

  const adverstAmount = state.adverts ? state.adverts.products.length : 0;

  return (
    <div className={style.content_wrapper}>
      <div className={style.head}>
        <div>
          <p className={style.text1}>Объявления</p>
          <p className={style.text2}>Всего: {adverstAmount}</p>
        </div>
        <Button />
      </div>
      {isLoading ? <Loader /> : <Pagination data={state.adverts} limit={4} />}
    </div>
  );
};

export default AdvertsPage;
