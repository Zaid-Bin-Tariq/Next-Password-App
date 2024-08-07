"use client"

import { useState } from 'react'
import Navbar from './navbar/page'
import Footer from './footer/page'
import Manager from './manager/page'

function App() {

  return (
    <>
      <Navbar/>
      <Manager/>
      <Footer/>
    </>
  )
}

export default App
