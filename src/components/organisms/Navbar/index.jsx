import React from 'react'

import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

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
      { user ? (
        <div className='username'>
          Hai, {user.name}
        </div>
      ) : (<div className="auth">
        <Button onClick={() => navigate('/signin')} className="btn-link" type="link">
          Login
        </Button>
        <Button onClick={() => navigate('/signup')} type="primary">Sign Up</Button>
      </div>
      )}

    </div>
  )
}
