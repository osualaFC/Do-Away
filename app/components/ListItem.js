import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image}) {
    return (
       <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View style={styles.subContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginStart:10
    },
    subContainer:{
        flexDirection:"column"
    },
    subtitle:{
        color:colors.colorGrey
    },
    title:{
        fontWeight:"500"
    }
})
export default ListItem;