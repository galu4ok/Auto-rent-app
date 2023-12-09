import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65727b95d61ba6fcc0150cf5.mockapi.io';

// Одержання масиву оголошень (метод GET) запитом

export const fetchAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      // виконуємо HTTP-запит та отримуємо усі оголошення
      const response = await axios.get('/adverts');

      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс,який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
