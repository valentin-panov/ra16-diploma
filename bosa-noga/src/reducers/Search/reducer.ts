/* eslint-disable no-param-reassign */

// Core
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Interfaces
import { SearchState } from '../../interfaces/Interfaces';

// Server
import { serverURL } from '../../App';

const initialState: SearchState = {
  searchField: false,
  searchString: '',
};

export const asyncFetchData = createAsyncThunk('card/FetchingData', async () => {
  const response = await fetch(`${serverURL}top-sales`);
  const topSales = await response.json();
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return topSales;
});

const searchSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  // builder.addCase(asyncFetchData.pending, (state) => {
  // state.status = 'pending';
  // state.error = '';
  // });
  // builder.addCase(asyncFetchData.fulfilled, (state, action: PayloadAction<ICard[]>) => {
  // state.items = [...action.payload];
  // state.status = 'success';
  // });
  // builder.addCase(asyncFetchData.rejected, (state, action) => {
  // state.status = 'error';
  // state.error = String(action.error.message);
  // });
  // },
});

export default searchSlice.reducer;
