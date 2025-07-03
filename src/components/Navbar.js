import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title = 'TextUtils', aboutText = 'About', mode = 'light', toggleMode, color, toggleColor, toggleGreenColor }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
                    <div className={`form-check form-switch text-${color}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={() => {toggleMode(); toggleColor()}}/>
                        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
                    </div>
                    <div className={`form-check form-switch text-${color} mx-2`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={() => {toggleGreenColor()}}/>
                        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Green Mode</label>
                    </div>
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
