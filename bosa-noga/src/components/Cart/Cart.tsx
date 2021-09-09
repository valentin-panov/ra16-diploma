import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from './CartItem/CartItem';

export default function Cart(): ReactElement {
  const items = useSelector((store: RootState) => store.cart.items);
  const total = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <CartItem index={index} item={item} key={item.item.id + item.size} />
            ))}
            <tr>
              <td colSpan={5} className="text-right">
                Общая стоимость
              </td>
              <td>{total} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
          <form className="card-body">
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="phone">Телефон</label>
              <input className="form-control" id="phone" placeholder="Ваш телефон" />
            </div>
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="address">Адрес доставки</label>
              <input className="form-control" id="address" placeholder="Адрес доставки" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="agreement" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="form-check-label" htmlFor="agreement">
                Согласен с правилами доставки
              </label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
