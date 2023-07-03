import { Modal } from 'bootstrap';
import { Header } from 'components/Header/Header';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
