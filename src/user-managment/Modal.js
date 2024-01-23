import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    }
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },

      () => {
        console.log(this.state);
      }
    );
  };

  // Submit User
  handleSubmit = (event) => {
    // Ngăn chặn trang web reload - nhờ vào event
    event.preventDefault();
    // move stay ra ngoài HOME
    this.props.submitUser(this.state);
  };

  // componentWillReceiveProps sẽ chạy khi nhận props có sự thay đổi
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.editUser) {
      // cập nhật state
      this.setState ({
        id: nextProps.editUser.id,
        fullname: nextProps.editUser.fullname,
        username: nextProps.editUser.username,
        email: nextProps.editUser.email,
        phoneNumber: nextProps.editUser.phoneNumber,
        type: nextProps.editUser.type,
      });
    } else {
      // reset state
    }
  }

  render() {
    console.log(this.props.editUser);
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.editUser ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnchange} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="fullname" onChange={this.handleOnchange} value={this.state.fullname} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnchange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnchange} value={this.state.phoneNumber} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnchange} value={this.state.type}  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
