import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
        <div className="nav-logo-link">
            <img className="logo-img" src="/images/Logo.png" alt="Logo" />
            <div>
                <Link className='nav-link' to='/find-jobs'>
                    Find Jobs
                </Link>
                <Link>
                    Browse Companies
                </Link>
            </div>
        </div>
    </div>
  )
}
