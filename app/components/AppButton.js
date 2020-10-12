import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from "../config/colors"

function AppButton({title, onPress, color="primary"}) {
    return (
       <TouchableOpacity style={[styles.button, {backgroundColor:Colors[color]}]} onPress={onPress}>
           <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.primary,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        padding:15,
        marginVertical:10
    },
    text:{
        color:Colors.colorTextSecondary,
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
})
export default AppButton;