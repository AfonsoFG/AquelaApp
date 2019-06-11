import React from 'react';

const TodoItem = ({children, onDelete, onChangeStatus, status, index, ...otherProps}) => (
    <li {...otherProps}>
      <span className={ status === 'done' ? 'done' : 'undone'}>{children}</span>
      <button className="btn btn-xs btn-danger pull-right btn-delete" onClick={() => onDelete(index)}>Delete</button>
      <button className="btn btn-xs btn-info pull-right btn-mark" onClick={() => onChangeStatus(index)}>Change status</button>
  </li>
);

export default TodoItem;