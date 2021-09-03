import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import { ICard } from '../../interfaces/Interfaces';

export default function Card(item: ICard): ReactElement {
  const { images, title, price, id } = item;
  return (
    <div className="card shadow">
      <div className="card-img-top">
        <img src={images[0]} className=" img-fluid" alt={title} />
      </div>
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{price} руб.</p>
        <a href={`/products/${id}.html`}>
          <Button variant="contained" color="primary" type="submit">
            Заказать
          </Button>
        </a>
      </div>
    </div>
  );
}
