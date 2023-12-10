// "address": "321 Example Avenue, Vinnytsia, Ukraine"

export const splitAddress = address => {
  let city = '';
  let country = '';

  const arr = address.split(',');
  if (arr.length >= 2) {
    city = arr[1].trim(); // Видаляємо можливі пробіли з міста
  }
  if (arr.length >= 1) {
    country = arr[arr.length - 1].trim(); // Видаляємо можливі пробіли з країни
  }
  return { city, country };
};
