import React, { useState } from 'react';
import nanoid from 'nanoid';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    isShowModal(false);
  };

  const createUser = () => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
  };

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  return <div></div>;
};
