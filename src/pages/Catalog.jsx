import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarFilter from '../components/CarFilter/CarFilter';
import CarList from '../components/CarList/CarList';
import { selectError, selectIsLoading } from '../redux/selector';
import { fetchAdverts } from '../redux/operations';
import { MainContainer } from '../GlobalStyle';

const Catalog = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  // Викликаємо операцію (асинхронний генератор екшену)
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <MainContainer>
      <CarFilter />
      {isLoading && !error && <b>Request in progress... </b>}
      <CarList />
    </MainContainer>
  );
};

export default Catalog;
