import React, { Component } from 'react';
import { Modal } from './Madal/Modal';
// import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { TodoList } from './TodoList/TodoList';
import { LoginForm } from './LoginForm/LoginForm';
import { nanoid } from 'nanoid';
import { Search } from './Search/Search';

export class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser', newUser);
  };

  render() {
    return (
      <>
        <Header showModal={this.showModal} />
        <Search />
        {/* <Counter /> */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <LoginForm
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
        <TodoList />
      </>
    );
  }
}
