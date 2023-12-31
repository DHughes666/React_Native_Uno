/* eslint-disable prettier/prettier */
// Import libraries
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';

import ProductDetail from './ProductDetail';

class CarList extends Component {
    constructor(){
        super();
        this.state = {productList: []};
    }

    componentDidMount() {
        axios('https://course-api.com/react-store-products')
            .then((resp) => {
                this.setState({productList: resp.data});
                console.log('success');
            })
            .catch((err) => console.log(err));
    }

    renderList = () => {
        return this.state.productList.map((item) => {
            return <ProductDetail key={item.id} product={item} />;
        });
    };

    render() {
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default CarList;
