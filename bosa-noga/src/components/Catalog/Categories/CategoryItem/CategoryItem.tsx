import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../../../interfaces/Interfaces';

export default function CategoryItem(item: Category): ReactElement {
  const { title, id } = item;
  return (
    <li className="nav-item">
      <Link className="nav-link" to={`${id}`}>
        {title}
      </Link>
    </li>
  );
}
