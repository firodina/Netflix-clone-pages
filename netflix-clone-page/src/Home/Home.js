import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import Banner from '../component/Banner/Banner'
import RowList from '../component/Rows/RowList/RowList'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <RowList/>
      <Footer/>
    </div>
  )
}

export default Home