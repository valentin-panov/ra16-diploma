/* eslint-disable no-param-reassign */

// Core
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
import { IInitialStateCatalog, ICard } from '../../interfaces/Interfaces';

// Server
import { serverURL } from '../../App';

const initialState: IInitialStateCatalog = {
  status: 'idle',
  error: '',
  catalog: [],
};

export const asyncFetchData = createAsyncThunk('catalog/FetchingData', async () => {
  const response = await fetch(`${serverURL}items `);
  if (!response.ok) {
    throw new Error('request error');
  }
  const items = await response.json();
  return items;
});

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncFetchData.pending, (state) => {
      state.status = 'pending';
      state.error = '';
    });
    builder.addCase(asyncFetchData.fulfilled, (state, action: PayloadAction<ICard[]>) => {
      state.catalog = [...action.payload];
      state.status = 'success';
    });
    builder.addCase(asyncFetchData.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export default catalogSlice.reducer;
