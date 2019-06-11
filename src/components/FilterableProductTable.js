import React, { Component, Fragment } from 'react';
import { FProductTable, FilterableSearchBar } from './';
import mock from '../data/customListMock';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: props.children,
            filteredProducts: props.children,
        };
    }

    filterByStock = (filterOOS) => {
        let filteredProducts = filterOOS ?
            this.getFilteredProductsByStock(this.state.products) :
            this.state.products;

        if (this.state.nameToFilter) {
            filteredProducts = this.getFilteredProductsByName(filteredProducts, this.state.nameToFilter)
        }

        this.setState({
            filteredProducts,
            filterOOS
        });
    }

    filterByName = (nameToFilter) => {
        let filteredProducts = this.getFilteredProductsByName(this.state.products, nameToFilter);

        if (this.state.filterOOS) {
            filteredProducts = this.getFilteredProductsByStock(this.state.products);
        }

        this.setState({
            filteredProducts,
            nameToFilter
        });
    }

    getFilteredProductsByStock = (products) => products.filter(x => x.stocked);

    getFilteredProductsByName = (products, name) => products.filter(x => x.name.indexOf(name) !== -1);

    render = () => (
        <Fragment>
            <FilterableSearchBar filterOutOfStock={this.filterByStock} filterName={this.filterByName} />
            <FProductTable>{this.state.filteredProducts}</FProductTable>
        </Fragment>
    );
};

export default FilterableProductTable;