import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
       <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View style={styles.subContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
       </View>
       </TouchableHighlight>
       </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 15,
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