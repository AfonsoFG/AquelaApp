import React, { Component, Fragment } from 'react';
import { AppSectionHeader, AppSectionFooter, CalculatorScreen, CalculatorKeyPad } from './'

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            result: ""
        }

    }

    calculate = () => {
        try {
            let equation = this.state.input;
            // eslint-disable-next-line
            const evalResult = eval(equation);
            const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
            this.setState({result});
          } catch (error) {
            alert('Invalid Mathematical Equation');
          }
    };


    reset = () => {
        this.setState({ input: '', result: '' });
    }

    backspace = () => {
        this.setState(prevState => ({ input: prevState.input.slice(0, -1) }));
    }

    onClick = (button) => {
        if (button === '=') {
            this.calculate();
        } else if (button === 'C') {
            this.reset();
        } else if (button === 'CE') {
            this.backspace();
        } else {
            this.setState(prevState => ({ input: prevState.input + button }));
        }
    };


    render() {
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageCalculator">
                    <div className='row'>
                        <div className='col-md-12 main'>
                            <h3>CALCULADORA</h3>
                            <CalculatorScreen result={this.state.result} input={this.state.input}></CalculatorScreen>
                            <CalculatorKeyPad onClick={this.onClick}></CalculatorKeyPad>
                        </div>
                    </div>
                </div>
                <AppSectionFooter />
            </Fragment>
        )
    }
}

export default Calculator