import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor() {
        super();
        this.ref = React.createRef();
        this.handleEnterClick.bind(this)
    }

    componentDidMount() {
        let handleEnterClick = this.handleEnterClick;
        this.ref.current.addEventListener('keypress', function(e) { handleEnterClick(e) } );
    }

    componentWillUnmount() {
        let handleEnterClick = this.handleEnterClick;
        this.ref.current.removeEventListener('keypress', function(e) { handleEnterClick(e) } );
    }

    handleEnterClick = (e) => {
        var key = e.which || e.keyCode || 0;
        if (key === 13) {
            this.props.onAdd(e.target.value)
        }
    }

    addItem() {
        this.ref.current.value === '' ? alert('Empty item!') : this.props.onAdd(this.ref.current.value);
    }

    render() {
        return (
            <div className="input-group todoAdd">
                <input type="text" className="form-control" placeholder="Add Todo" ref={this.ref} id="inputAddTodo" />
                <span className="input-group-btn">
                    <button className="btn btn-success" type="button" onClick={this.addItem.bind(this)}>Add</button>
                </span>
            </div>
        );
    }

}

export default TodoAdd;