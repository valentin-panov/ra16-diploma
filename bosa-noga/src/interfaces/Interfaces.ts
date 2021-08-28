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

export interface IInitialStateTopSales {
  status: 'idle' | 'pending' | 'success' | 'error';
  items: ICard[];
  error: string;
}
export interface IInitialStateCatalog {
  catalog: {
    status: 'idle' | 'pending' | 'success' | 'error';
    items: ICard[];
    error: string;
  };
}
