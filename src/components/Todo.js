import React, { Component, Fragment } from 'react';
import { AppSectionHeader, AppSectionFooter, AppSectionSidebar, TodoList, TodoAdd, TodoFilter } from './';
import '../assets/css/App.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        const initialTodos = [
            {
                'text': 'Turn off the alarm',
                'status': 'done'
            },
            {
                'text': 'Have breakfast',
                'status': 'done'
            },
            {
                'text': 'Drive to Porto',
                'status': 'done'
            },
            {
                'text': 'Learn ES6',
                'status': 'undone'
            },
            {
                'text': 'Learn React',
                'status': 'undone'
            },
            {
                'text': 'Eat a Bifana',
                'status': 'undone'
            },
        ];

        this.state = {
            todos: initialTodos,
            filteredTodos: initialTodos
        }
    }

    addTodo = (todo) => {
        const todos = this.state.todos;

        var newTodo = {
            text: todo,
            status: "undone"
        };

        todos.push(newTodo);

        const filteredTodos = this.getFilteredTodos(todos);

        this.setState({ todos, filteredTodos });
    }


    changeStatus = (index) => {

        const filteredTodos = this.state.filteredTodos;

        filteredTodos[index].status = (filteredTodos[index].status === 'done') ? 'undone' : 'done';

        this.setState({ 
            filteredTodos
        });

    }

    deleteTodo = (index) => {
        const todos = this.state.todos.filter((e, i) => i !== index);
        const filteredTodos = this.getFilteredTodos(todos);
        this.setState({ todos, filteredTodos });
    }

    filterTodosByValue = (todos, value) => todos.filter(
        todo => todo.text.includes(value)
    );

    getFilteredTodos = (todos) => this.state.filterValue ?
        this.filterTodosByValue(todos, this.state.filterValue) : todos;

    filterTodo = (value) => this.setState({
        filteredTodos: this.filterTodosByValue(this.state.todos, value),
        filterValue: value
    });

    render() {
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageTodo">
                    <div className='row'>
                        <div className="col-md-12">
                            <h3>To-do List</h3>
                        </div>
                        <div className='col-md-9 main'>
                            <TodoAdd onAdd={this.addTodo} />
                            <TodoList onDelete={this.deleteTodo} onChangeStatus={this.changeStatus}>{this.state.filteredTodos}</TodoList>
                            <TodoFilter onFilter={this.filterTodo} />
                        </div>
                        <div className='col-md-3 sidebar'>
                            <AppSectionSidebar />
                        </div>
                    </div>
                </div>
                <AppSectionFooter />
            </Fragment>
        );
    }
}

export default Todo;