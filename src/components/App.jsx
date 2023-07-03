import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { TodoPage } from './pages/TodoPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
};
