import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { user, deleteUser, editUser } = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser" onClick={() => {
              editUser(user)
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => {
            deleteUser(user.id)
          }}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
