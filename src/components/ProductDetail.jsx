/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';
import Item from './item';
import ItemSection from './ItemSection';
import Button from './Button';

const ProductDetail = ({product}) => {
    const {name, company, image} = product;
    return (
        <Item>
            <ItemSection>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{name}</Text>
                    <Text style={styles.headerText}>{company}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style={styles.imageStyle} source={{uri: image}} />
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0,
    },
};

export default ProductDetail;
