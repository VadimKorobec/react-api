import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './pages/NewsPage';
import { TodoPage } from './pages/TodoPage';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage';
import { TodoDetails } from './TodoItem/TodoDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<TodoDetails />} />
      </Route>
    </Routes>
  );
};
