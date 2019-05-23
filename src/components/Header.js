import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
        <header>
            <div className="container">
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                    <Link to='/' className="my-0 mr-md-auto font-weight-normal">Site XPTO</Link>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link to='/blog' className="">Blog</Link>
                        <Link to='/metronome' className="">Metronome</Link>
                        <Link to='/calculator' className="">Calculator</Link>
                        <Link to='/about' className="">About</Link>
                    </nav>
                </div>
            </div>
        </header>
        );
    }
}

export default Header