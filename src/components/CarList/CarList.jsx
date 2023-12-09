import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selector';

import CarItem from '../CarItem/CarItem';

const CarList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <ul>
      {adverts.map(advert => (
        <li key={advert.id}>
          <CarItem advert={advert} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
