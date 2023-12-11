import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Car from '../../images/car.png';
import { splitRentalCond } from '../../helpers/splitRentalCond';

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

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <div>
        <button onClick={handleCloseModal}>Close</button>
        <img
          src={img ? `${img}` : Car}
          alt={`${make} ${model}`}
          loading="lazy"
          width="300"
          height="200"
        />
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <div>
          <p>
            {city} | {country} | Id: {id} | Year: {year} | Type: {type}
          </p>
          <p>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
        </div>
        <p>{description}</p>
        <h4>Accessories and functionalities:</h4>
        <div>
          <ul>
            {accessories.map((item, index) => (
              <li key={nanoid()}>
                {item}
                {index !== accessories.length - 1 && <span>{'  |  '}</span>}
              </li>
            ))}
          </ul>
          <ul>
            {functionalities.map((item, index) => (
              <li key={nanoid()}>
                {item}
                {index !== functionalities.length - 1 && <span>{'  |  '}</span>}
              </li>
            ))}
          </ul>
        </div>
        <h4>Rental Conditions:</h4>
        <ul>
          <li>{minAge}</li>
          <li>{licence}</li>
          <li>{condition}</li>
          <li>
            Mileage: <span>{mileage.toLocaleString()}</span>
          </li>
          <li>
            Price: <span>{rentalPrice.slice(1) + '$'}</span>
          </li>
        </ul>
      </div>
      <Link href="tel:+380730000000">Rental car</Link>
    </Modal>
  );
};

export default ModalComponent;
