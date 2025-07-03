import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title = 'TextUtils', aboutText = 'About', mode = 'light', toggleMode, color }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={() => {toggleMode('primary')}}></div>
                        <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={() => {toggleMode('danger')}}></div>
                        <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={() => {toggleMode('success')}}></div>
                        <div className="bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={() => {toggleMode('warning')}}></div>
                        <div className="bg-light rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={() => {toggleMode('light')}}></div>
                        <div className="bg-dark rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={() => {toggleMode('dark')}}></div>
                    </div>
                    {/* <div className={`form-check form-switch text-${color}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={() => {toggleMode(null)}}/>
                        <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
                    </div> */}
                    {/* <div className={`form-check form-switch text-${color} mx-2`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={() => {toggleGreenColor()}}/>
                        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Green Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

// Navbar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About text here'
// };
