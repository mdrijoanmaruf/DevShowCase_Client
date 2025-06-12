import React from 'react'
import Header from '../Pages/Shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'

const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root