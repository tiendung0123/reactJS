import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data,
      productDetail: data[0],
      carts: []
    };
  }

  //nhận data từ component con
  handleDetail = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  _findIndex = (maSP) => this.state.carts.findIndex((product) => product.maSP === maSP)

  handleAddToCart = (product) => { 
    console.log(product);
    const productCart = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
      giaBan: product.giaBan,
    }

    // clone lại mảng carts
    const cartsNew = [...this.state.carts];

    // Tìm vị trí của sản phẩm trong mảng
    const index = this._findIndex(productCart.maSP);
    if(index !== -1){
      // Tìm thấy => tăng số lượng
      cartsNew[index].soLuong += 1;

    }else {
      // Không tìm thấy => thêm vào mảng
      cartsNew.push(productCart);
    }
    

    // set lại state
    this.setState ({
      carts: cartsNew,
    }, () => {
      console.log(this.state.carts);
    })
  };

  handleUpdateQuantity = (maSP, isPlus) => {
    console.log(maSP, isPlus);
    // clone lại mảng carts
    const cartsNew = [...this.state.carts];
    // Tìm vị trí của sản phẩm trong mảng
    const index = this._findIndex(maSP);
    if (index !== -1) {
      // Kiểm tra tăng/giảm số lượng
      if(isPlus) {
        // Tang SL
        cartsNew[index].soLuong += 1;
      } else {
        // Giam SL
        if (cartsNew[index].soLuong > 1) {
          cartsNew[index].soLuong -= 1;
        }

      }

      // set lai state
      this.setState({
        carts: cartsNew,
      });

    }
  };

  handleDeleteProduct = (maSP) => {
    console.log(maSP);
    // clone lai mang carts
    const cartsNew = [...this.state.carts];

    // Loại bỏ sản phẩm bị xóa khỏi mảng, trả mảng mới sau khi filter
    const cartsFilter = cartsNew.filter((product) => product.maSP !== maSP);

    // Set lại state
    this.setState ({
      carts: cartsFilter,
    });
  };

  totalCount = () => {
    return this.state.carts.reduce((total, product) => {
      return (total += product.soLuong);
    }, 0)
  }

  render() {
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalCount()})
          </button>
        </div>
        <DanhSachSanPham
          products={this.state.products}
          getDetailProduct={this.handleDetail}
          addToCart={this.handleAddToCart}
        />
        <Modal carts={this.state.carts} updateQuantity={this.handleUpdateQuantity} deleteProduct={this.handleDeleteProduct}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.productDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.productDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.state.productDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.productDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.state.productDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.state.productDetail.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
