import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image, onPress,IconComponent, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
       <View style={styles.container}>
           {IconComponent}
        {image && <Image style={styles.image} source={image}/>}
        <View style={styles.subContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
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
        backgroundColor:colors.colorTextSecondary
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginStart:10
    },
    subContainer:{
        flexDirection:"column",
        marginLeft:10,
        justifyContent:"center"
    },
    subtitle:{
        color:colors.colorGrey,
        fontSize:15
    },
    title:{
        fontWeight:"400",
        fontSize:15,
        color: colors.colorTextPrimary
    }
})
export default ListItem;