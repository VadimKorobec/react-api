import React, { useState } from 'react';
import nanoid from 'nanoid';
import { Modal } from './Modal/Modal';
import { FormaLogin } from './FormaLogin/FormaLogin';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    isShowModal(false);
  };

  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.lof('newUser', newUser);
  };

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  return (
    <div>
      <Header showModal={showModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormaLogin closeModal={closeModal} createUser={createUser} />
        </Modal>
      )}
    </div>
  );
};
