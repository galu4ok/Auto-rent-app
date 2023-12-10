import { useState } from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import Car from '../../images/car.png';
import { splitAddress } from '../../helpers/splitAddress';

const CarItem = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <div>
      <div>
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
