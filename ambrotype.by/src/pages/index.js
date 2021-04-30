import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Index_Content from '../components/Index_Content'
import Menu from '../components/Menu'

export default function Index() {
  return <div>
    <Header />
    <Menu />
    <Index_Content />
    <Footer />
  </div>
}