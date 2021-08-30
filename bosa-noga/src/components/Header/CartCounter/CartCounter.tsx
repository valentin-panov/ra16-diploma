import React, { ReactElement } from 'react';

export default function CartCounter(): ReactElement {
  const count = 1;
  return <>{!!count && <div className="header-controls-cart-full">{count}</div>}</>;
}
