import React, { Component } from 'react';
import { Modal } from './Madal/Modal';
import { Counter } from './Counter/Counter';

export class App extends Component {
  state = {
    isShowModal: true,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };
  render() {
    return (
      <>
        <Counter />
        {this.state.isShowModal && <Modal>some</Modal>}
      </>
    );
  }
}
