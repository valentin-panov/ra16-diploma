import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import { RootState } from '../../store';
import { asyncFetchProductCard } from '../../reducers/ProductCard/reducer';

export default function ProductCard(): ReactElement {
  const history = useHistory();
  const status = useSelector((store: RootState) => store.productCard.status);
  const error = useSelector((store: RootState) => store.productCard.error);
  const item = useSelector((store: RootState) => store.productCard.item);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation: string = pathname.split('/')[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchProductCard(parseInt(splitLocation, 10)));
  }, [dispatch]);

  const handleBuy = () => {
    history.push('/');
  };

  const { images, title, sku, manufacturer, color, material, reason, season } = item;

  return (
    <>
      {status === 'pending' && <Preloader />}
      {status === 'error' && <Error message={error} />}
      {status === 'success' && (
        <section className="catalog-item">
          <h2 className="text-center">{title}</h2>
          <div className="row">
            <div className="col-5">
              <img src={images[0]} className="img-fluid" alt="" />
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{reason}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <p>
                  Размеры в наличии:
                  <span className="catalog-item-size selected">18 US</span>{' '}
                  <span className="catalog-item-size">20 US</span>
                </p>
                <p>
                  Количество:{' '}
                  <span className="btn-group btn-group-sm pl-2">
                    <Button className="btn btn-secondary">-</Button>
                    <span className="btn btn-outline-primary">1</span>
                    <Button className="btn btn-secondary">+</Button>
                  </span>
                </p>
              </div>
              <Button
                className="btn btn-danger btn-block btn-lg"
                onClick={() => handleBuy()}
                variant="contained"
                color="secondary"
              >
                В корзину
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
