import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectIsLoading } from '../../redux/selector';
import CarItem from '../CarItem/CarItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchAdverts } from '../../redux/operations';

const CarList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1); // Стартова сторінка

  console.log('Поточна к-сть оголошень:', adverts.length);

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
    console.log('Page', page);
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1); // Оновлюємо сторінку на 1 б
  };

  return (
    <div>
      <ul>
        {adverts.map(advert => (
          <li key={advert.id}>
            <CarItem advert={advert} />
          </li>
        ))}
      </ul>
      {adverts?.length > 0 && !isLoading && <LoadMoreBtn loadMore={loadMore} />}
      {adverts?.length === 0 && (
        <div>
          <p>Sorry, there are no advertisements.</p>
        </div>
      )}
    </div>
  );
};

export default CarList;
