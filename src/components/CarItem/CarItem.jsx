import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import FavoritesBtn from '../FavoriteBtn/FavoriteBtn';
import Car from '../../images/car.png';
import { selectFavorites } from '../../redux/selector';
import { addToFavorites, delFromFavorites } from '../../redux/advertsSlice';
import { splitAddress } from '../../helpers/splitAddress';

const CarItem = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

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
  } = advert;

  const { city, country } = splitAddress(address);

  const isFavorites = favorites?.some(item => item.id === id);

  const handleFavorites = () => {
    return isFavorites
      ? dispatch(delFromFavorites(advert)) // Видалення зі списку улюблених
      : dispatch(addToFavorites(advert)); // Додавання до списку улюблених
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <FavoritesBtn onClick={handleFavorites}>Favorite</FavoritesBtn>
        <img
          src={img ? `${img}` : Car}
          alt={`${make} ${model}`}
          loading="lazy"
          width="300"
          height="200"
        />
      </div>
      <div>
        <p>
          {make} <span>{model}</span>,{year}
          <span>{rentalPrice}</span>
        </p>
        <p>
          {city} | {country} | {rentalCompany} | Premium
        </p>
        <p>
          {type} | {model} | {id} | {accessories[0]}
        </p>
      </div>
      <button type="button" onClick={handleOpenModal}>
        Learn more
      </button>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        advert={advert}
        city={city}
        country={country}
      />
    </div>
  );
};

export default CarItem;
