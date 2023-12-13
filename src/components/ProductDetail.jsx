/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import Item from './item';
import ItemSection from './ItemSection';

const ProductDetail = ({name}) => {
    return (
        <Item>
            <ItemSection>
                {name}
            </ItemSection>
        </Item>
    );
};

export default ProductDetail;
