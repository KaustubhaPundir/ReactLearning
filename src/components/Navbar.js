import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Textutils</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Abouts</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="button" onClick={props.toggleMode}>toggleMode</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes={      // this tell the props should be of which type
    title: PropTypes.string.isRequired,
    home: PropTypes.string
}
Navbar.defaultProps={
    title: "this is default prop title",
    home: "this is default prop home"
}