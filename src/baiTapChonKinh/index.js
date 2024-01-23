import React, { Component } from 'react'

export default class BaiTapChonKinh extends Component {
  render() {
    return (
        <div className="container">
        <h3>* Bài Tập Chọn Kính</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={this.state.urlImage} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.changeUrlImage("./images/red-car.jpg");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.changeUrlImage("./images/black-car.jpg");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-light"
              onClick={() => {
                this.changeUrlImage("./images/silver-car.jpg");
              }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    )
  }
}
