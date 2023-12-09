import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CarList from '../components/CarList/CarList';
import { fetchAdverts } from '../redux/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  // Викликаємо операцію (асинхронний генератор екшену)
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <section>
      <h2>Каталог автомобілів для оренди</h2>
      <CarList />
    </section>
  );
};

export default Catalog;
