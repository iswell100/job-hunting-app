import React from 'react'
import Navbar from '../../organisms/Navbar'
import Footer from '../../organisms/Footer'

export default function LandingPageTemplate({children}) {
  return (
    <div>
      <div className='bg-landingpage'></div>
      <Navbar />
      <div id="content" style={{ padding: '0 124px' }}>{children}</div>
      <Footer />
    </div>
  )
}
