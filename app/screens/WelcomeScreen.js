import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from "../components/AppButton";


import colors from "../config/colors"

function WelcomeScreen(props) {
    return (
       <ImageBackground blurRadius={1} style ={styles.background} source={require("../assets/background1.jpg")}>
           <View style={styles.logoContainer}>
                <Image  style={styles.logo} source={require("../assets/logo2.png")}/>
                <Text style={styles.logoText}>Sell what you do not want</Text>
           </View>
           <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={()=>console.log("Tapped")}/>
                <AppButton title="register" color="secondary" onPress={()=>console.log("Tapped")}/>
           </View>
       </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttonContainer:{
        padding:15,
        width:"100%"
    },
    logo:{
        width:100,
        height:100
    },
    logoContainer:{
        position:"absolute",
        top:40,
        alignItems:"center"
    },
    logoText:{
        color:colors.colorTextPrimary,
        fontWeight:"bold",
        fontSize:20,
        paddingVertical:20
    }
    
})

export default WelcomeScreen;