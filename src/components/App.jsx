import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './pages/NewsPage';
import { TodoPage } from './pages/TodoPage';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
};
