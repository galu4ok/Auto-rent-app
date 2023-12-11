import { FiHeart } from 'react-icons/fi';
import { Favorite } from './FavoriteBtn.styled';

const FavoritesBtn = ({ isChosen, onClick }) => {
  return (
    <Favorite isChosen={isChosen} onClick={onClick}>
      <FiHeart />
    </Favorite>
  );
};

export default FavoritesBtn;
