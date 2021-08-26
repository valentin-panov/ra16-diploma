import React, { ReactElement } from 'react';

export type Props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function SearchIcon({ onClick }: Props): ReactElement {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  return <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={onClick} />;
}
