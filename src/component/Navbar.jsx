import React from 'react'
import logo from "../logo.png";
export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg" style={{background:"white",boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)"}}>
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Bizgigs" className='mx-4' height="50px" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mx-4">
          <li className="nav-item">
            <a className="nav-link active navitem" style={{ color: '#a064d9', fontWeight: "bold" }} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active navitem" style={{ color: '#a064d9', fontWeight: "bold" }} href='#offeringSection'>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active navitem" style={{ color: '#a064d9', fontWeight: "bold" }} href='#whyUs'>Why Us?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active navitem" style={{ color: '#a064d9', fontWeight: "bold" }} href='#contact'>Let's Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}
