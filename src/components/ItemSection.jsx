/* eslint-disable prettier/prettier */
// Import libraries
import React from 'react';
import {Text, View} from 'react-native';

const ItemSection = ({children}) => {
    return (
        <View style={styles.viewStyle}>
            <Text>{children}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
    },
};

export default ItemSection;
