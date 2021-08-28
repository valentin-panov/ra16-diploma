import React, { ReactElement } from 'react';
import Preloader from '../Preloader/Preloader';

export default function Catalog(): ReactElement {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <Preloader />
    </section>
  );
}
