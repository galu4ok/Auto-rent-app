import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectIsLoading } from '../../redux/selector';
import CarItem from '../CarItem/CarItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchAdverts } from '../../redux/operations';
import { SectionContainer, Message } from '../../GlobalStyle';
import { CarsList } from './CarList.styled';

const CarList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1); // Стартова сторінка

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // Оновлюємо сторінку на 1
  };

  return (
    <SectionContainer>
      <CarsList>
        {adverts.map(advert => (
          <li key={advert.id}>
            <CarItem advert={advert} />
          </li>
        ))}
      </CarsList>
      {adverts?.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {adverts?.length === 0 && (
        <Message>Sorry, there are no advertisements.</Message>
      )}
    </SectionContainer>
  );
};

export default CarList;
