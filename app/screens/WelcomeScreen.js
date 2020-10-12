import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground style ={styles.background} source={require("../assets/background1.jpg")}>
           <View style={styles.logoContainer}>
                <Image  style={styles.logo} source={require("../assets/logo2.png")}/>
                <Text style={styles.logoText}>Sell what you do not want</Text>
           </View>
           <View style={styles.loginButton}></View>
           <View style={styles.registerButton}></View>
       </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65"
    },
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecde4"
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
        color:"#000",
       fontWeight:"bold"
       
    }
    
})

export default WelcomeScreen;