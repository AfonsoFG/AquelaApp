import React, { Component } from 'react';
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
                        <a href="#__" className="smooth">
                            <span>Para o topo</span>
                            <UpArrow />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-mid">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-logo">
                        <a href="/" className="footer-logo"><Logo /></a>
                        <div className="link-title">Heading 1</div>
                        <a className="link" href="#">Link 1</a>
                        <a className="link" href="#">Link 3</a>
                    </div>
                    <div className="col-md-3">
                        <div className="link-title">Heading 1</div>
						<a className="link" href="#">Link 1</a>
						<a className="link" href="#">Link 2</a>
						<a className="link" href="#">Link 3</a>
						<a className="link" href="#">Link 4</a>
                    </div>   
                    <div className="col-md-3">
                        <div className="link-title">Heading 2</div>
						<a className="link" href="#">Link 1</a>
						<a className="link" href="#">Link 2</a>
						<a className="link" href="#">Link 3</a>
						<a className="link" href="#">Link 4</a>
                    </div>
                    <div className="col-md-3 ">
                        <div className="link-section">
                            <div className="link-title">Heading 3</div>
                            <a className="link" href="#">Link 1</a>
                            <a className="link" href="#">Link 2</a>
                            <a className="link" href="#">Link 3</a>
                            <a className="link" href="#">Link 4</a>
                            <div className="link-social">
                                <a className="linkedin" href="#" target="_blank" ref="noopener noreferrer"></a>
                                <a className="twitter" href="#" target="_blank" ref="noopener noreferrer"></a>
                                <a className="facebook" href="#" target="_blank" ref="noopener noreferrer"></a>
                                <a className="instagram" href="#" target="_blank" ref="noopener noreferrer"></a>
                            </div>
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
