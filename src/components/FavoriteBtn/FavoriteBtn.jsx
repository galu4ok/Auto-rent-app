import { FiHeart } from 'react-icons/fi';
import { Favorite } from './FavoriteBtn.styled';

const FavoritesBtn = ({ onClick }) => {
  return (
    <Favorite onClick={onClick}>
      <FiHeart />
    </Favorite>
  );
};

export default FavoritesBtn;
