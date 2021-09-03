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

export const searchItems = createAsyncThunk('search/FetchingData', async (query: string) => {
  const request = await fetch(`${serverURL}items?q=<${query}>`);
  if (!request.ok) {
    throw new Error('Something went wrong');
  }
  const response = await request.json();
  return response;
});

const searchSlice = createSlice({
  name: 'search',
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
