import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';

// import { NewsPage } from './pages/NewsPage';
// import { TodoPage } from './pages/TodoPage';
// import { TodoDetails } from './TodoItem/TodoDetails';

const TodoDetails = lazy(() => import('./TodoItem/TodoDetails'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="todo/:id" element={<TodoDetails />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/signUp"
        element={
          <Suspense>
            <RegistrationPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
