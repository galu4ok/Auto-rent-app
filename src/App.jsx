import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

// Routing:
// “/” - домашня сторінка з загальним описом послуг, що надає компанія
// “/catalog” - сторінка, що містить каталог автівок різної комплектації
//“/favorites” - сторінка з оголошеннями, які були додані користувачем в улюблені
// Якщо користувач зайшов за маршрутом, якого не існує, його необхідно перенаправляти на домашню сторінку

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
