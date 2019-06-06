import React, { Component, Fragment } from 'react';
import { MetronomeSelectOption } from './../components'

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
                let value = optionsList[key];

                return options.push(
                    <MetronomeSelectOption key={key} optionValue={value} optionKey={key} />
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