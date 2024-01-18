import React, { Component } from 'react'

export default class Child extends Component {
  handleResetUsername = () => {
    const usernameReset = "CyberSoft";
    this.props.resetUsername(usernameReset);
  }
  render() {
    console.log(this.props);
    const { usesnameProps, ageProps } = this.props;

    return (
      <div>
        <h3>Child</h3>
        <h4>Username: {usesnameProps} - Age: {ageProps}</h4>
        <button className="btn btn-danger" onClick={this.handleResetUsername}>Reset Username</button>
      </div>
    )
  }
}
