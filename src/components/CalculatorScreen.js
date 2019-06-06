import React, { Component } from 'react';

class CalculatorScreen extends Component {
 
    render() {
        let { input, result } = this.props;
        return (
        <section className="row calculatorScreen"> 
            <div className="col-md-12">
                <p className="input" id="input">{ input }</p>
            </div>
            <div className="col-md-12">
                <p className="result" id="result">{ result }</p>
            </div>
        </section>
        )
    }
}

export default CalculatorScreen;