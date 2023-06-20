import React, { useState } from 'react';
import nanoid from 'nanoid';
import { Modal } from './Modal/Modal';

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
          <FormLoghin closeModal={closeModal} createUser={createUser} />
        </Modal>
      )}
    </div>
  );
};
