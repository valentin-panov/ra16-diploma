import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import Card from '../Card/Card';
import { ICard } from '../../interfaces/Interfaces';
import { asyncFetchData } from '../../reducers/TopSales/reducer';
import { RootState } from '../../store';

export default function TopSales(): ReactElement {
  const status = useSelector((store: RootState) => store.items.status);
  const error = useSelector((store: RootState) => store.items.error);
  const items = useSelector((store: RootState) => store.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchData());
  }, [dispatch]);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>

      {status === 'pending' && <Preloader />}
      {status === 'error' && <Error message={error} />}

      {status === 'success' && items.length > 0 && (
        <div className="row">
          {items.map(
            (item: ICard): ReactElement => (
              <Card key={item.id} {...item} />
            )
          )}
        </div>
      )}
    </section>
  );
}
