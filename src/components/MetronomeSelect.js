import React, { Component, Fragment } from 'react';

class MetronomeSelect extends Component {

    constructor(props) {
        super(props)
        this.id = this.props.id;
        this.defaultValue = this.props.defaultValue;
        this.options = this.props.options;
    }

    printOptions() {
        let optionsList = this.options;
        let options = [];

        if (Object.keys(optionsList).length > 0) {
            Object.keys(optionsList).forEach(key => {
                return options.push(
                    <option value={key} key={key}>{key}</option>
                );
            });
        }
        return options;
    }

    render() {
        return (
            <Fragment>
                <select className="form-control" id={this.id} defaultValue={this.defaultValue}>
                    {this.printOptions()}
                </select>
            </Fragment>
        );
    }
}

export default MetronomeSelect;