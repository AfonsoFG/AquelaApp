import React, { Component, Fragment } from 'react';
import { Header, Footer, Sidebar } from './'

class About extends Component {

    render() {
        return (
        <Fragment>
            <Header/>
            <div class="container pageBody pageAbout">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <h3>About me</h3>
                        <p>Página About</p>
                    </div>
                    <div className='col-md-3 sidebar'>
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        )
    }
}

export default About