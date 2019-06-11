import React from 'react';

const FilterableCategoryRow = ({ children, ...otherProps }) => <tr className="category" {...otherProps}><td colSpan="2">{ children }</td></tr>;

export default FilterableCategoryRow;