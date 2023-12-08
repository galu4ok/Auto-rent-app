import Car from '../../images/car.png';

const splitAddress = address => {
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

const CarItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = car;
  const { city, country } = splitAddress(address);

  return (
    <div>
      <div>
        <img
          src={img ? `${img}` : Car}
          alt={`${make} ${model}`}
          width="300"
          height="200"
        />
      </div>
      <div>
        <p>
          {make} <span>{model}</span>, {year}
          <span>{rentalPrice}</span>
        </p>
        <p>
          {city} | {country} | {rentalCompany}
        </p>
        <p>
          {type} | {model} | {id} | {accessories[0]}
        </p>
      </div>
      <button type="button">Learn more</button>
    </div>
  );
};

export default CarItem;
