import React from 'react';
import { Link } from 'react-router-dom';
import LocationSearch from './locationsearch.component'


import './navbar.component.scss';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark mb-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <Link className="navbar-brand" to="/">Synup</Link>
            <div className="navbar-search"><LocationSearch /></div>
            <div className="collapse navbar-collapse" id="navbarText">
                
            </div>
        </nav>
    )
}

export default Navbar;