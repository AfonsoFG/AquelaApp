import React, { Component, Fragment } from 'react';
import { AppSectionHeader, AppSectionFooter, CalculatorScreen, CalculatorKeyPad } from './'
import SoundSuccess from '../assets/sounds/win31.mp3';
import SoundError from '../assets/sounds/icq-uh-oh.mp3';

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            result: ""
        }

        this.soundSuccess = new Audio(SoundSuccess);
        this.soundError = new Audio(SoundError);

    }

    calculate = () => {
        try {
            let equation = this.state.input;
            // eslint-disable-next-line
            const evalResult = eval(equation);
            const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
            this.setState({
                result
            });
            this.soundSuccess.play();
          } catch (error) {
            this.setState({
                result: "Invalid Equation!"
            });
            this.soundError.play();
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
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <CalculatorScreen result={this.state.result} input={this.state.input}></CalculatorScreen>
                                    <CalculatorKeyPad onClick={this.onClick}></CalculatorKeyPad>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AppSectionFooter />
            </Fragment>
        )
    }
}

export default Calculator