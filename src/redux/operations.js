import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65727b95d61ba6fcc0150cf5.mockapi.io';
const LIMIT_PER_PAGE = 12; // Задамо ліміт оголошень на сторінці

//  Функція для генерації URL з пошуковими параметрами
const generateAdvertsURL = (page, limit) => {
  const url = new URL('https://65727b95d61ba6fcc0150cf5.mockapi.io/adverts');

  url.searchParams.append('completed', false);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);
  return url;
};

// Одержання масиву оголошень (метод GET) запитом

export const fetchAdverts = createAsyncThunk(
  'adverts/getAll',
  async ({ page }, thunkAPI) => {
    try {
      // Формування URL з параметрами page та limit
      const limit = LIMIT_PER_PAGE;
      const url = generateAdvertsURL(page, limit);

      // виконуємо HTTP-запит та отримуємо усі оголошення
      const response = await axios.get(url);
      console.log('Усі оголошення:', response.data);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс,який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
