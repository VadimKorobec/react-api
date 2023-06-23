import React, { Component } from 'react';
import { Modal } from './Madal/Modal';
import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';

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
        <Counter />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>some</Modal>
        )}
      </>
    );
  }
}
