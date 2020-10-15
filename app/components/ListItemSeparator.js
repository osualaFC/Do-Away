import React from 'react';
import colors from '../config/colors';
import {View, StyleSheet} from 'react-native'

function ListItemSeparator() {
    return (
       <View style={styles.separator}/>
    );
}

const styles = StyleSheet.create({
    separator:{
        width:"100%",
        backgroundColor:colors.colorLight,
        height:1.5
    }
})

export default ListItemSeparator;