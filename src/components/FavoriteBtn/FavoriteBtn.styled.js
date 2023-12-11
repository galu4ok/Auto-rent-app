import { styled } from 'styled-components';

export const Favorite = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;

  z-index: 666;

  svg {
    width: 18px;
    height: 18px;
    fill: ${props => (props.isChosen ? 'blue' : 'trasparent')};
    stroke: ${props => (props.isChosen ? 'blue' : 'white')};
    cursor: pointer;
    transition: fill 0.3s ease, stroke 0.3s ease;

    &:hover {
      fill: ${props => (props.isChosen ? 'royalblue' : 'ligthgrey')};
      stroke: ${props => (props.isChosen ? 'royalblue' : 'ligthgrey')};
    }
  }
`;
