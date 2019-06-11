import React from 'react';
import { FilterableCategoryRow, FilterableProductRow } from './';
import mock from '../data/customListMock';

const FProductTable = ({ children, ...otherProps }) => (
    <table {...otherProps}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            {renderBody(children)}
        </tbody>
    </table>
);

const renderBody = (products) => {
    let cursorCategory = '';
    const result = [];

    products.forEach(element => {
        const { category, ...otherProps } = element;

        if (cursorCategory !== category) {
            result.push(<FilterableCategoryRow key={category}>{category}</FilterableCategoryRow>);
            cursorCategory = category;
        }
        result.push(<FilterableProductRow {...otherProps} key={otherProps.name} />);
    });

    return result;
}

export default FProductTable;
