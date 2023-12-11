import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import { selectFavorites } from '../../redux/selector';
import { SectionContainer } from '../../GlobalStyle';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <SectionContainer>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(advert => (
            <li key={advert.id}>
              <CarItem advert={advert} />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h2>Sorry, there are no favorite cars yet...</h2>
        </div>
      )}
    </SectionContainer>
  );
};

export default FavoritesList;
