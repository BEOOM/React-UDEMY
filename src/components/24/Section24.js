import React, { Component } from "react";

import "./App24.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class Section24 extends Component {
  state = {
    modalIsOpen: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} />
        ) : null}
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}
// 재랜더링되는 시간을 기다려주지 않음 -> 모달창이 애니메이션 없이 바로 없어짐

export default Section24;
