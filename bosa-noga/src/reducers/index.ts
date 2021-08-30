// Reducers
import topSalesSlice from './TopSales/reducer';
import catalogSlice from './Catalog/reducer';
import categoriesSlice from './Categories/reducer';

export const rootReducer = {
  topSales: topSalesSlice,
  catalog: catalogSlice,
  categories: categoriesSlice,
};
