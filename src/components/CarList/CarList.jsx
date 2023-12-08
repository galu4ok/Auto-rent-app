import CarItem from '../CarItem/CarItem';

const CarList = ({ cars }) => {
  return (
    <ul>
      {Array.isArray(cars) ? (
        cars.map(car => (
          <li key={car.id}>
            <CarItem car={car} />
          </li>
        ))
      ) : (
        <li>No cars available</li>
      )}
    </ul>
  );
};

export default CarList;
