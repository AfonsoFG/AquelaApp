import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { ReactComponent as Logo } from '../assets/img/logos/logo.svg';
import { ReactComponent as UpArrow } from '../assets/img/icons-site/up-arrow.svg';

import { ReactComponent as IcoInstagram } from '../assets/img/icons-social/instagram.svg';
import { ReactComponent as IcoFacebook } from '../assets/img/icons-social/facebook.svg';
import { ReactComponent as IcoTwitter } from '../assets/img/icons-social/twitter.svg';
import { ReactComponent as IcoLinkedin } from '../assets/img/icons-social/linkedin.svg';

class AppSectionFooter extends Component {

    scrollToTop = () => {
        Scroll.animateScroll.scrollToTop();
    }

    componentDidMount = () => {
        this.scrollToTop();
    }

    componentDidUpdate = () => {
        this.scrollToTop();
    }

    render() {
        return (
            <footer>
                <section className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 footer-scroll">
                                <a href="#top" onClick={this.scrollToTop}>
                                    <span>Up, up &amp; away!</span> <UpArrow />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-mid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-logo">
                                <Link to='/' className="footer-logo"><Logo /></Link><div className="link-title">Special pages</div><ul>
                                    <li><Link to='/lol' className="">404</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="link-title">Pages</div>
                                <ul>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/metronome'>Metronome</Link></li>
                                    <li><Link to='/calculator'>Calculator</Link></li>
                                    <li><Link to='/weather'>Weather</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="link-title">The same pages</div>
                                <ul>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/metronome'>Metronome</Link></li>
                                    <li><Link to='/calculator'>Calculator</Link></li>
                                    <li><Link to='/weather'>Weather</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="link-title">And again</div>
                                <ul>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/metronome'>Metronome</Link></li>
                                    <li><Link to='/calculator'>Calculator</Link></li>
                                    <li><Link to='/weather'>Weather</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                </ul>
                                <div className="link-social">
                                    <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer" className="linkedin">
                                        <IcoLinkedin />
                                    </a>
                                    <a href='https://twitter.com' target="_blank" rel="noopener noreferrer" className="twitter">
                                        <IcoTwitter />
                                    </a>
                                    <a href='https://facebook.com' target="_blank" rel="noopener noreferrer" className="facebook">
                                        <IcoFacebook />
                                    </a>
                                    <a href='https://instagram.com' target="_blank" rel="noopener noreferrer" className="instagram">
                                        <IcoInstagram />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-sub">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center">AquelaApp © 2019</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default AppSectionFooter;