import React from 'react'
import Navbar from '../../organisms/Navbar'

export default function LandingPageTemplate({children}) {
  return (
    <div>
        <Navbar />
        <div id="content">{children}</div>
    </div>
  )
}
