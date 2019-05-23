import React, { Component, Fragment } from 'react'
import { Header, Footer } from './../components'
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
                            <Link to='/blog'>Blog</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/metronome'>Metronome</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/calculator'>Calculator</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="box">
                            <Link to='/sobre'>Sobre</Link>
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