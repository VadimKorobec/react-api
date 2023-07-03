import { Modal } from 'bootstrap';
import { Header } from 'components/Header/Header';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
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
    <div className="container">
      <Header showModal={showModal} />
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
