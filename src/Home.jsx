import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Offering from './component/Offering'
import Contact from './component/Contact'
import About from './component/About'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Offering/>
      <About/>
      <Contact/>
    </div>
  )
}
