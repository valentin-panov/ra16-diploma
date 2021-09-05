export interface ICard {
  id: number;
  category: number;
  title: string;
  images: [string];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  sizes: { size: string; avalible: boolean }[];
}

export interface Status {
  status: 'idle' | 'pending' | 'success' | 'error';
  error: string;
}

export interface IInitialStateTopSales extends Status {
  topSales: ICard[];
}

export interface IInitialStateCatalog extends Status {
  catalog: ICard[];
  haveMore: boolean;
  category: number;
}

export interface SearchState {
  searchString: string;
}

export interface Category {
  id: number;
  title: string;
}

export interface Categories extends Status {
  categories: Category[];
}

export interface IInitialStore {
  topSales: IInitialStateTopSales;
  catalog: IInitialStateCatalog;
  search: SearchState;
  categories: Category[];
}
