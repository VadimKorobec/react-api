import React, { Component } from 'react';
import { Modal } from './Madal/Modal';
// import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { TodoList } from './TodoList/TodoList';
import { LoginForm } from './LoginForm/LoginForm';

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

  render() {
    return (
      <>
        <Header showModal={this.showModal} />
        {/* <Counter /> */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <LoginForm />
          </Modal>
        )}
        <TodoList />
      </>
    );
  }
}
