import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  // todo: added 'active' in className with condition
  return (
    <ul className="nav nav-tabs nav-pills ">
      <li className="nav-item">
        <Link to="/" className="nav-link active" role="button">
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" role="button">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/tutors" className="nav-link" role="button">
          Тьюторы
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
