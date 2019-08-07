import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import { ReactComponent as Logo } from '../assets/img/logos/logo2.svg';
import { ReactComponent as UpArrow } from '../assets/img/icons-site/up-arrow.svg';
import { ReactComponent as IcoInstagram } from '../assets/img/icons-social/instagram.svg';
import { ReactComponent as IcoFacebook } from '../assets/img/icons-social/facebook.svg';
import { ReactComponent as IcoGithub } from '../assets/img/icons-social/github.svg';
import { ReactComponent as IcoLinkedin } from '../assets/img/icons-social/linkedin.svg';
import { ReactComponent as LovePt } from '../assets/img/icons-site/love-pt.svg';

class AppSectionFooter extends Component {

    scrollToTop = () => {
        Scroll.animateScroll.scrollToTop();
    }

    componentDidMount = () => {
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
                                    <li><Link to='/todo'>Todo List</Link></li>
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
                                   <li><Link to='/todo'>Todo List</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/metronome'>Metronome</Link></li>
                                    <li><Link to='/calculator'>Calculator</Link></li>
                                    <li><Link to='/weather'>Weather</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="link-title">More about me</div>
                                
                                <div className="link-social">
                                    <a href='https://github.com/AfonsoFG' target="_blank" rel="noopener noreferrer" className="github">
                                        <IcoGithub />
                                    </a>
                                    <a href='https://linkedin.com/in/AfonsoFG' target="_blank" rel="noopener noreferrer" className="linkedin">
                                        <IcoLinkedin />
                                    </a>
                                    <a href='https://facebook.com/AfonsoFG' target="_blank" rel="noopener noreferrer" className="facebook">
                                        <IcoFacebook />
                                    </a>
                                    <a href='https://instagram.com/AfonsoFG' target="_blank" rel="noopener noreferrer" className="instagram">
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
                                <p className="text-center"><a href='https://github.com/AfonsoFG/ThatApp' target="_blank" rel="noopener noreferrer">ThatApp</a> 2019 <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/' target="_blank" rel="noopener noreferrer">by-nc-sa 4.0</a><br/> Made with <LovePt /> by  <a href='https://afonsogomes.com' target="_blank" rel="noopener noreferrer">Afonso Gomes</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default AppSectionFooter;