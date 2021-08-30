import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { asyncFetchData } from '../../reducers/Catalog/reducer';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import { ICard } from '../../interfaces/Interfaces';
import Card from '../Card/Card';
import Categories from './Categories/Categories';

export default function Catalog(): ReactElement {
  const status = useSelector((store: RootState) => store.catalog.status);
  const error = useSelector((store: RootState) => store.catalog.error);
  const catalog = useSelector((store: RootState) => store.catalog.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchData());
  }, [dispatch]);

  return (
    <>
      {(status === 'pending' || status === 'success') && (
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <Categories />
          {status === 'pending' && <Preloader />}
          {status === 'success' && catalog.length > 0 && (
            <div className="row">
              {catalog.map(
                (item: ICard): ReactElement => (
                  <Card key={item.id} {...item} />
                )
              )}
            </div>
          )}
        </section>
      )}
      {status === 'error' && <Error message={error} />}
    </>
  );
}
