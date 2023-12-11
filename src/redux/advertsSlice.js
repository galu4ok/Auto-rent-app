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
  reducers: {
    addToFavorites: (state, action) => {
      const clickedAdvert = state.items.find(
        item => item.id === action.payload.id
      );
      if (clickedAdvert) {
        state.favorites.push(clickedAdvert);
      }
    },
    delFromFavorites: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      state.favorites = updatedFavorites;
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, handleGetAdvertsFulfilled);
  },
});

export const { addToFavorites, delFromFavorites, changeFilter } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
