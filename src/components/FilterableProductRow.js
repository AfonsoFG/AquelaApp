import React from 'react';

const FilterableProductRow = ({name, price, stocked}) => <tr className={ stocked ? null : "red" }><td>{name}</td><td>{price}</td></tr>;

export default FilterableProductRow;
