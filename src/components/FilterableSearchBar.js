import React from 'react';

const FilterableSearchBar = ({filterOutOfStock, filterName, ...otherProps}) => (
    <div {...otherProps}>
        <input type="text" onChange={ e => filterName(e.target.value) } /> 
        <input type="checkbox" onClick={ (e) => filterOutOfStock(e.target.checked) } /><span>Only show products with stock</span>
    </div>
);

export default FilterableSearchBar;