import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/logo.svg';

class Header extends Component {
    render() {
        return (
        <header>
            <nav className="navbar navbar-fixed-top" id="topo">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Menu</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className="navbar-brand"><Logo /></Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/blog' className="">Blog</Link></li>
                            <li><Link to='/metronome' className="">Metronome</Link></li>
                            <li><Link to='/calculator' className="">Calculator</Link></li>
                            <li><Link to='/about' className="">About</Link></li>
							<div className="underbar"></div>
                        </ul>
						
                    </div>
                </div>
            </nav>          
        </header>
        );
    }
}

export default Header