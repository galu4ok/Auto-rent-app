import { FiHeart } from 'react-icons/fi';
import { Favorite } from './FavoriteBtn.styled';

const FavoritesBtn = ({ isFavorites, onClick }) => {
  return (
    <Favorite isFavorites={isFavorites} onClick={onClick}>
      <FiHeart />
    </Favorite>
  );
};

export default FavoritesBtn;
