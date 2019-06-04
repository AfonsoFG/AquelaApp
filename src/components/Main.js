import React, { Component, Fragment } from 'react'
import { Header, Footer } from './../components'
import { ReactComponent as IcoBlog } from '../assets/img/blog.svg';
import { ReactComponent as IcoMetronome } from '../assets/img/metronome.svg';
import { ReactComponent as IcoAbout } from '../assets/img/about.svg';
import { ReactComponent as IcoCalculator } from '../assets/img/calculator.svg';
import { Link } from "react-router-dom";
import '../assets/css/App.css';

class Main extends Component {
    
    render() {
        return (
        <Fragment>
            <Header/>
            <section className="container pageBody pageMain">
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/blog'><IcoBlog/><span>Blog</span></Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/metronome'><IcoMetronome/><span>Metronome</span></Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/calculator'><IcoCalculator/><span>Calculator</span></Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/sobre'><IcoAbout/><span>Sobre</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>
        )
    }
}

export default Main