import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { TodoPage } from './pages/TodoPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<NewsPage />} />
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
};
