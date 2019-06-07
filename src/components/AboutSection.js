import React, { Component, Fragment } from 'react';
import Afonso from '../assets/img/eu.jpg';

class AboutSection extends Component {

    render() {
        return (
        <Fragment>
            <section className="aboutSection clearfix">
                <h5>The Guy</h5>
                <img src={ Afonso } alt="Eu!" />
                <p>Just a guy with medium to low knowledges in a fullstack of HTML, CSS, JS,  PHP and SQL, loving every single one of these amazing technologies. I try to do pretty and usefull things for the web! :) Successfully?... Time will tell!</p>
            </section>
        </Fragment>
        )
    }
}

export default AboutSection