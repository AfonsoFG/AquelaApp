import React from 'react';

const TodoFilter = ({onFilter, ...otherProps}) =>
      <input type="text" className="form-control filter-todos" onChange={(e) => onFilter(e.target.value)} placeholder="Filter Todo list" />;

export default TodoFilter;