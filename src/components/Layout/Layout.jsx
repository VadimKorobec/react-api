import { Modal } from 'bootstrap';
import { Header } from 'components/Header/Header';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { nanoid } from 'nanoid';
import { Suspense, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser', newUser);
  };

  return (
    <>
      <div className="container">
        <Header showModal={showModal} />
        <Suspense>
          <Outlet />
        </Suspense>
        {isShowModal && (
          <Modal closeModal={closeModal}>
            <LoginForm createUser={createUser} closeModal={closeModal} />
          </Modal>
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default Layout;
