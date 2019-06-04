import React, { Component } from 'react';

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
                            <img src="/includes/img/up-arrow-lightgray.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-mid">
            <div className="container">
                <div class="row">
                    <div className="col-md-3">
                        <a href="/"><img className="logo" src="/includes/img/Rapid7_logo.svg" alt="AquelaApp logo"/></a>
                        <div className="footer__links-title">Customer Support</div>
                        <a className="link" href="tel:1-866-390-8113">+1-866-390-8113 (Toll Free)</a>
                        <div className="footer__links-title">Sales Support</div>
                        <a className="link" href="tel:866-772-7437">+1-866-7RAPID7 (Toll Free)</a>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__links-title">Solutions</div>
                        <a className="link" href="/solutions">All Solutions</a>
                        <a className="link" href="/solutions">Industry Solutions</a>
                        <a className="link" href="#">Compliance Solutions</a>
                    </div>

   
                    <div className="col-md-3">
                        <div className="footer__links-title">Support &amp; Resources</div>
                        <a className="link" href="/for">Product Support</a>
                        <a className="link" href="/resources">Resource Library</a>
                        <a className="link" href="/about">Customer Stories</a>
                        <a className="link" href="/aboutwebcasts">Events &amp; Webcasts</a>
                        <a className="link" href="/db">Vulnerability &amp; Exploit Database</a>
                    </div>
           

                    <div className="col-md-3 ">
                        <div className="footer__links-section footer__connect">
                            <div className="footer__links-title">Connect with Us</div>
                            <a className="link" href="#">Contact</a>
                            <a className="link" href="#">Blog</a>
                            <a className="link" href="#">Support Login</a>
                            <a className="link" href="/careers">Careers</a>
                            <div className="footer__links-social">
                                <a className="linkedin" href="https://www.linkedin.com/company/39624" target="_blank"></a>
                                <a className="twitter" href="https://twitter.com/Rapid7" target="_blank"></a>
                                <a className="facebook" href="https://www.facebook.com/rapid7" target="_blank"></a>
                                <a className="instagram" href="https://www.instagram.com/rapid7/" target="_blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-sub">
            <div className="row">
                <div>© AquelaApp</div>
                <div><a href="/legal">Legal Terms</a></div>
                &nbsp; | &nbsp;
                <div><a href="/privacy-policy">Privacy Policy</a></div>
                &nbsp; | &nbsp;
                <div><a href="/trust">Trust</a></div>
            </div>
        </section>
    </footer>
    );
  }
}

export default Footer;
