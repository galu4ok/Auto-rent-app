import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  items: [],
  favorites: [],
  filter: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleGetAdvertsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

//Cлайс списку оголошень
const advertsSlice = createSlice({
  // Ім'я слайсу
  name: 'adverts',
  // Початковий стан редюсера слайсу
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, handleGetAdvertsFulfilled);
  },
});

export const advertsReducer = advertsSlice.reducer;
