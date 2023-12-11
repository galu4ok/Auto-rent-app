import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarFilter from '../components/CarFilter/CarFilter';
import CarList from '../components/CarList/CarList';
import { selectError, selectIsLoading } from '../redux/selector';
import { fetchAdverts } from '../redux/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  // Викликаємо операцію (асинхронний генератор екшену)
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <section>
      <CarFilter />
      {isLoading && !error && <b>Request in progress... </b>}
      <h2>Каталог автомобілів для оренди</h2>
      <CarList />
    </section>
  );
};

export default Catalog;
