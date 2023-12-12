import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import { selectFavorites } from '../../redux/selector';
import { SectionContainer, Message } from '../../GlobalStyle';
import { FavoriteList } from './FavoritesList.styles';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <SectionContainer>
      {favorites.length > 0 ? (
        <FavoriteList>
          {favorites.map(advert => (
            <li key={advert.id}>
              <CarItem advert={advert} />
            </li>
          ))}
        </FavoriteList>
      ) : (
        <Message>
          <h2>Sorry, there are no favorite cars yet...</h2>
        </Message>
      )}
    </SectionContainer>
  );
};

export default FavoritesList;
