import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as UpArrow } from '../assets/img/up-arrow.svg';

class Footer extends Component {

  render() {
    return (
    <footer>
        <section className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>oi</p>
                    </div>
                    <div className="col-md-6 footer-scroll">
						<Link to='#top' className="smooth">
                            <span>Para o topo</span>
                            <UpArrow />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-mid">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-logo">
						<Link to='/' className="footer-logo"><Logo /></Link>
                        <div className="link-title">Heading 1</div>
						<ul>
							<li><Link to='/about' className="">Link 1</Link></li>
							<li><Link to='/about' className="">Link 2</Link></li>
						</ul>
                    </div>
                    <div className="col-md-3">
                        <div className="link-title">Heading 1</div>
						<ul>
							<li><Link to='/about' className="link">Link 1</Link></li>
							<li><Link to='/about' className="link">Link 2</Link></li>
							<li><Link to='/about' className="link">Link 3</Link></li>
							<li><Link to='/about' className="link">Link 4</Link></li>
						</ul>
                    </div>   
                    <div className="col-md-3">
                        <div className="link-title">Heading 2</div>
						<ul>
							<li><Link to='/about' className="link">Link 1</Link></li>
							<li><Link to='/about' className="link">Link 2</Link></li>
							<li><Link to='/about' className="link">Link 3</Link></li>
							<li><Link to='/about' className="link">Link 4</Link></li>
						</ul>
                    </div>
                    <div className="col-md-3 ">
                       
					   
						<div className="link-title">Heading 3</div>
						<ul>
							<li><Link to='/about' className="link">Link 1</Link></li>
							<li><Link to='/about' className="link">Link 2</Link></li>
							<li><Link to='/about' className="link">Link 3</Link></li>
							<li><Link to='/about' className="link">Link 4</Link></li>
						</ul>
						<div className="link-social">
							<a href='https://linkedin.com' target="_blank" rel="noopener noreferrer" className="linkedin">L</a>
							<a href='https://twitter.com' target="_blank" rel="noopener noreferrer" className="twitter">T</a>
							<a href='https://facebook.com' target="_blank" rel="noopener noreferrer" className="facebook">F</a>
							<a href='https://instagram.com' target="_blank" rel="noopener noreferrer" className="instagram">I</a>
						</div>
                       
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-sub">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<p className="text-center">© AquelaApp</p>
					</div>
				</div>
			</div>
        </section>
    </footer>
    );
  }
}

export default Footer;
