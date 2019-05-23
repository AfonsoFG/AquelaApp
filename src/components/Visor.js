import React, { Component, Fragment } from 'react';

class Visor extends Component {
 
    render() {

        let { input, resultado } = this.props;

        return (
        <section className="row visor"> 
            <div className="col-md-12">
                <p className="input" id="input">{ input }</p>
            </div>
            <div className="col-md-12">
                <p className="resultado" id="resultado">{ resultado }</p>
            </div>
        </section>
        )
    }

}

export default Visor;