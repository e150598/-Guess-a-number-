import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Color from "../constants/color"


const NumberContainer =props=>{
    return(
    <View style ={styles.container}>
        <Text style ={styles.textContainer}>
          {props.children}
        </Text>
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor:Color.accent,
        padding:10,
        borderRadius:20,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'

    },
    textContainer:{
        fontSize:22,
        textAlign:'center',
        color:Color.primary,
        padding:10
    }
})


export default NumberContainer;