import { styled } from 'styled-components';

export const FavoritesBtn = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Favorite = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;

  z-index: 666;

  svg {
    width: 18px;
    height: 18px;
    fill: ${props => (props.isFavorites ? 'blue' : 'transparent')};
    stroke: ${props => (props.isFavorites ? 'blue' : 'white')};
    cursor: pointer;
    transition: fill 0.3s ease, stroke 0.3s ease;

    &:hover {
      fill: ${props => (props.isFavorites ? 'royalblue' : 'ligthgrey')};
      stroke: ${props => (props.isFavorites ? 'royalblue' : 'ligthgrey')};
    }
  }
`;
