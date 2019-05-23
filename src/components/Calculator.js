import React, { Component, Fragment } from 'react';
import { Header, Footer, Sidebar, Visor, KeyPad } from './'

class Calculator extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          input: "",
          resultado: ""
        }
    
      }
    
      calculate = () => {}
    
      reset = () => {
        this.setState({ input: "" });
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
            <Header/>
            <div className="container pageBody pageCalculator">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <h3>CALCULADORA</h3>
                        <Visor resultado={ this.state.resultado } input={ this.state.input }></Visor>
                        <KeyPad onClick={this.onClick}></KeyPad>
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

export default Calculator