import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';

export default class Communicate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "DungNguyen",
      age: 10,
    };
  }

  handleChangeUsername = () => {
    this.setState ({
      username: "Kai"
    })
  };

  handleReset = (username) => {
    // phương thức nhận data từ component con
    console.log(username);
    // cập nhật lại state
    this.setState({
      username,
    })
  }

  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h3>* Communicate</h3>
        <h4>Username: {username} - Age: {age}</h4>
        <button className="btn btn-success" onClick={this.handleChangeUsername}>Change username</button>
        <Child usesnameProps = {username} ageProps = {age} resetUsername = {this.handleReset} />
        <ChildFnc usernameProps = {username} ageProps = {age}/>
      </div>
    )
  }
}
