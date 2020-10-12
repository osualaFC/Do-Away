import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from "../config/colors"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeButton}>
                <MaterialCommunityIcons name="close" color="white" size={30}/>
            </View>
            <View style={styles.deleteButton}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
            </View>
            <Image  
            resizeMode="contain" 
            style={styles.image} 
            source={require("../assets/chair.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeButton:{
        position:"absolute",
        top:50,
        left:50
    },
    container:{
        backgroundColor:colors.colorTextPrimary,
        flex:1
    },
    deleteButton:{
        position:"absolute",
        top:50,
        right:50
    },
    image:{
        width:"100%",
        height:"100%"
    }
})

export default ViewImageScreen;