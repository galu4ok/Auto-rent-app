import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import FavoritesBtn from '../FavoriteBtn/FavoriteBtn';
import Car from '../../images/car.png';
import { selectFavorites } from '../../redux/selector';
import { addToFavorites, delFromFavorites } from '../../redux/advertsSlice';
import { splitAddress } from '../../helpers/splitAddress';

import { FiHeart } from 'react-icons/fi';
import { CarItemWrapper, ImageWrapper, LearnMoreBtn } from './CarsItem.styled';

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
    <CarItemWrapper>
      <ImageWrapper>
        <FavoritesBtn onClick={handleFavorites}>
          <FiHeart
            style={{
              width: '18px',
              height: '18px',
              fill: isFavorites ? 'rgba(52, 112, 255, 1)' : 'transparent',
              stroke: isFavorites ? 'rgba(52, 112, 255, 1)' : 'white',
              cursor: 'pointer',
              transition: 'fill 0.3s ease, stroke 0.3s ease',
            }}
          />
        </FavoritesBtn>
        <img
          src={img ? `${img}` : Car}
          alt={`${make} ${model}`}
          loading="lazy"
          width="100%"
          height="100%"
        />
      </ImageWrapper>
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
      <LearnMoreBtn type="button" onClick={handleOpenModal}>
        Learn more
      </LearnMoreBtn>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        advert={advert}
        city={city}
        country={country}
      />
    </CarItemWrapper>
  );
};

export default CarItem;
