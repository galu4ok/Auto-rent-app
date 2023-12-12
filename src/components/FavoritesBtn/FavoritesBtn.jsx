import { FiHeart } from 'react-icons/fi';
import { Favorite } from '../FavoritesBtn/FavoritesBtn.styled';

const FavoritesBtn = ({ isFavorites, onClick }) => {
  return (
    <Favorite isFavorites={isFavorites} onClick={onClick}>
      <FiHeart />
    </Favorite>
  );
};

export default FavoritesBtn;
