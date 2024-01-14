import React, { Component } from 'react'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
// import PageContent from './pageContent'
import PageContent from './pageContent'

export default class BaiTapLayoutComponent extends Component {
  render() {
    return (
      <div>* BaiTapLayoutComponent
        <Navbar />
        <Header />
        <PageContent />
        <Footer />
      </div>

    )
  }
}
