import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Mainlayout() {
  const userName='Mays';
  return (
    <>
    <Navbar userName={userName} />
    <Outlet />
    <Footer userName={userName} />
    </>
  )
}
