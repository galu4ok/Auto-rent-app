// "rentalConditions": "Minimum age: 24\nValid driver's license\nCredit card and insurance required"

export const splitRentalCond = rentalConditions => {
  let minAge = '';
  let licence = '';
  let condition = '';

  const arr = rentalConditions.split('\n');

  minAge = arr[0];
  licence = arr[1];
  condition = arr[2];

  return { minAge, licence, condition };
};
