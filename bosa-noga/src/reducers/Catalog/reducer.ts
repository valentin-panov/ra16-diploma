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
  haveMore: true,
  category: 0,
};

export const asyncFetchMore = createAsyncThunk(
  'catalog/FetchingMoreData',
  async (params?: { count?: string; category?: number }) => {
    const categoryFilter = params && params.category ? `categoryId=${params.category}` : ``;
    const countOffset = params && params.count ? `offset=${params.count}` : ``;

    const urlParamsAll = categoryFilter && countOffset ? `?${categoryFilter}&${countOffset}` : '';
    const urlParamsCat = categoryFilter ? `?${categoryFilter}` : '';
    const urlParamsCou = countOffset ? `?${countOffset}` : '';

    const reqURL = `${serverURL}items${urlParamsAll || urlParamsCat || urlParamsCou}`;

    const response = await fetch(reqURL);
    if (!response.ok) {
      throw new Error(`request error: ${reqURL}`);
    }
    const items = await response.json();
    return items;
  }
);

export const asyncFetchCategory = createAsyncThunk('catalog/FetchingCategory', async (category: number) => {
  const categoryFilter = `?categoryId=${category}`;
  const reqURL = `${serverURL}items${categoryFilter}`;
  const response = await fetch(reqURL);
  if (!response.ok) {
    throw new Error(`request error: ${reqURL}`);
  }
  const items = await response.json();
  return items;
});

export const asyncFetchData = createAsyncThunk('catalog/FetchingData', async (category?: number) => {
  const categoryFilter = category ? `?categoryId=${category}` : ``;
  const reqURL = `${serverURL}items${categoryFilter}`;
  const response = await fetch(reqURL);
  if (!response.ok) {
    throw new Error(`request error: ${reqURL}`);
  }
  const items = await response.json();
  return items;
});

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchMore.pending, (state) => {
      state.status = 'pending';
      state.error = '';
    });
    builder.addCase(asyncFetchMore.fulfilled, (state, action: PayloadAction<ICard[]>) => {
      state.haveMore = !(action.payload.length < 6);
      state.catalog.push(...action.payload);
      state.status = 'success';
    });
    builder.addCase(asyncFetchMore.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(asyncFetchData.pending, (state) => {
      state.status = 'pending';
      state.error = '';
    });
    builder.addCase(asyncFetchData.fulfilled, (state, action: PayloadAction<ICard[]>) => {
      state.haveMore = !(action.payload.length < 6);
      state.catalog = [...action.payload];
      state.status = 'success';
    });
    builder.addCase(asyncFetchData.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(asyncFetchCategory.pending, (state) => {
      state.status = 'pending';
      state.error = '';
    });
    builder.addCase(asyncFetchCategory.fulfilled, (state, action: PayloadAction<ICard[]>) => {
      state.haveMore = !(action.payload.length < 6);
      state.catalog = [...action.payload];
      state.status = 'success';
    });
    builder.addCase(asyncFetchCategory.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export default catalogSlice.reducer;
export const { setCategory } = catalogSlice.actions;
