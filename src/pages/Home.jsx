import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Policy from '../components/Policy'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection/>
    <Bestseller/>
    <Policy/>
    <Newsletter/>
    </>
    
  )
}

export default Home