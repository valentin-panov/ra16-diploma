import React, { ReactElement } from 'react';

export default function CartCounter(): ReactElement {
  const count = '1';
  return <div className="header-controls-cart-full">{count}</div>;
}
