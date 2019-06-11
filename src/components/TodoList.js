import React from 'react';
import { TodoItem } from './';

const TodoList = ({ children, onDelete, onChangeStatus, ...otherProps }) => (
    <ul className="todoList" {...otherProps}>
        {
            Object.keys(children).map((key, index) =>
                <TodoItem key={index} index={index} onDelete={onDelete} onChangeStatus={onChangeStatus} status={children[key]['status']}>{children[key]['text']}</TodoItem>
            )
        }
    </ul>
);

export default TodoList;