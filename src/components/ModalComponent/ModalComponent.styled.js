import { styled } from 'styled-components';

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 541px;
  height: 780px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;

  h3 {
    color: #121417;

    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    margin-bottom: 8px;

    span {
      color: #3470ff;
    }
  }

  > p {
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    margin-bottom: 24px;
  }

  h4 {
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    margin-bottom: 8px;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
    scale: 1;
    fill: rgba(18, 20, 23, 1);
    transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      fill: rgba(52, 112, 255, 1);
    }
  }
`;
export const ImageWrapper = styled.div`
  background-color: #f3f3f2;
  border-radius: 14px;
  margin-bottom: 14px;

  img {
    object-fit: cover;
    border-radius: 14px;
    width: 100%;
    height: 248px;
  }
`;
export const AdvertInfo = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 24px;
`;
export const Features = styled.div`
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const RentalWrapper = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  left: 40px;
`;
export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    border-radius: 35px;
    background: #f9f9f9;
    padding: 7px 14px;

    color: #363535;

    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.24px;

    span {
      color: #3470ff;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: -0.24px;
    }
  }
`;
export const RentalBtn = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: transparent;
  color: white;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus,
  &:active {
    background: #0b44cd;
  }
`;
