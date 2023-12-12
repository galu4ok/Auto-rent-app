import Modal from 'react-modal';
import { nanoid } from 'nanoid';
import { MdOutlineClose } from 'react-icons/md';
import Car from '../../images/car.png';
import { splitRentalCond } from '../../helpers/splitRentalCond';
import {
  ModalDiv,
  CloseBtn,
  ImageWrapper,
  AdvertInfo,
  Features,
  FeaturesList,
  RentalWrapper,
  RentalList,
  RentalBtn,
} from './ModalComponent.styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    maxWidth: 'fit-content',
    maxHeight: 'fit-content',
    margin: 'auto',
    overflow: 'none',
    inset: 0,
    padding: 0,
    border: 'none',
    background: 'none',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 3000,
  },
};

Modal.setAppElement('#root');

const ModalComponent = ({
  isModalOpen,
  handleCloseModal,
  advert,
  city,
  country,
}) => {
  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    accessories,
    mileage,
    description,
    rentalConditions,
    engineSize,
    fuelConsumption,
    id,
  } = advert;
  const { minAge, licence, condition } = splitRentalCond(rentalConditions);

  const handleNotFoundImage = event => {
    event.target.src = Car;
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <ModalDiv>
        <CloseBtn onClick={handleCloseModal}>
          <MdOutlineClose />
        </CloseBtn>
        <ImageWrapper>
          <img
            src={img ? `${img}` : Car}
            onError={handleNotFoundImage}
            alt={`${make} ${model}`}
            loading="lazy"
          />
        </ImageWrapper>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <AdvertInfo>
          <p>
            {city} | {country} | Id: {id} | Year: {year} | Type: {type}
          </p>
          <p>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
        </AdvertInfo>
        <p>{description}</p>
        <h4>Accessories and functionalities:</h4>
        <Features>
          <FeaturesList>
            {accessories.map((item, index) => (
              <li key={nanoid()} style={{ whiteSpace: 'pre' }}>
                {item}
                {index !== accessories.length - 1 && <span>{'  |  '}</span>}
              </li>
            ))}
          </FeaturesList>
          <FeaturesList>
            {functionalities.map((item, index) => (
              <li key={nanoid()} style={{ whiteSpace: 'pre' }}>
                {item}
                {index !== functionalities.length - 1 && <span>{'  |  '}</span>}
              </li>
            ))}
          </FeaturesList>
        </Features>
        <h4>Rental Conditions:</h4>
        <RentalList>
          <li>
            Minimum age: <span> {minAge}</span>
          </li>
          <li>{licence}</li>
          <li>{condition}</li>
          <li>
            Mileage: <span>{mileage.toLocaleString()}</span>
          </li>
          <li>
            Price: <span>{rentalPrice.slice(1) + '$'}</span>
          </li>
        </RentalList>
      </ModalDiv>
      <RentalWrapper>
        <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
      </RentalWrapper>
    </Modal>
  );
};

export default ModalComponent;
