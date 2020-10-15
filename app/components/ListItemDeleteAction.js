import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback style={styles.deleteAction} onPress={onPress}>
        <View>
            <MaterialCommunityIcons name='trash-can' size={35} color={colors.colorTextSecondary}/>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    deleteAction:{
        backgroundColor:"red", 
        width:100,
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default ListItemDeleteAction;
//unit-test, integration test
//Appium, Detox--end-to-end test
//Test-Renderer, React Native-testing-library----component
//Expo is a framework and a platform for universal React applications. 
//It is a set of tools and services built around React Native and native platforms that help
 //you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.