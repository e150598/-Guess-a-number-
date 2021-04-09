import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Color from '../constants/color'

const MainButton =props=> {
    return (
        <TouchableOpacity onPress ={props.onPress}>
           <View style = {sytles.button}>
               <Text style = {sytles.buttonText}>{props.children}</Text>
           </View>
        </TouchableOpacity>
    )
}

const sytles = StyleSheet.create({
 
button:{
    backgroundColor:Color.primary,
    paddingVertical: 12,
    paddingHorizontal:30,
    borderRadius:30,
    marginVertical:5
},
buttonText:{
    color:"black",
    fontFamily:'open-sans-bold',
    fontSize: 18
}

})


export default MainButton;