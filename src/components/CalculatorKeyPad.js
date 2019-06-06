import React, { Component } from 'react';

class CalculatorKeyPad extends Component {
    render() {
        return (
            <section className="keypad">

                <div className="row">
                    <div className="col-xs-3">
                        <button name="(" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">(</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="CE" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">CE</button>
                    </div>
                    <div className="col-xs-3">
                        <button name=")" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">)</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="C" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">C</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-3">
                        <button name="1" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">1</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="2" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">2</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="3" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">3</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="+" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <button name="4" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">4</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="5" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">5</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="6" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">6</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="-" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <button name="7" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">7</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="8" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">8</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="9" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">9</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="*" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">*</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <button name="." onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">.</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="0" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-info">0</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="=" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-success">=</button>
                    </div>
                    <div className="col-xs-3">
                        <button name="/" onClick={(e) => this.props.onClick(e.target.name)} className="btn btn-block btn-warning">/</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default CalculatorKeyPad;