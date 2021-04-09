import React, {useState } from 'react'
import {Text, View, StyleSheet,TextInput, Button, TouchableWithoutFeedback,Keyboard, Alert} from "react-native";
import Card from "../components/Card"
import Color from "../constants/color"
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer"
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const numberInputHandler =inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandle =()=>{
        setEnteredValue(' ')
        setConfirmed(false)
    }

    const confirmHandler =()=>{
        const choosenNumber = parseInt(enteredValue);

     

        if(isNaN(choosenNumber)|| choosenNumber <=0 || choosenNumber > 99){
            Alert.alert("Invalid number","Number nust be between 1 and 99", [{text:"Okay", 
            style: "destructive", onPress: resetInputHandle }])
            
            return;
        }
        setConfirmed(true)
        setSelectedNumber(choosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
        


    }

    let confirmOutput;

    if(confirmed){

        confirmOutput =(<Card style ={styles.confirmNumber}><Text>Your entered number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton   onPress ={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
    
        </Card>
        )

    }
      
    return(
        <TouchableWithoutFeedback onPress ={()=>{
            Keyboard.dismiss();
        }}>
            
        <View style ={styles.screen}>
            <Text style={styles.title}>Start A New Game</Text>
            
                <Card style ={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Input style = {styles.input} blurOnSubmit autoCapitalize="none" autoCorrect ={false} keyboardType ="number-pad" maxLength =
                {2} onChangeText ={numberInputHandler} value = {enteredValue}/>
                <View style ={styles.buttonContainer}>
                    <View style ={styles.button}><Button title ="Reset" color ={Color.accent} onPress={resetInputHandle}/></View>
                    
                    <View style ={styles.button}><Button title ="Confirm" color ={Color.primary} onPress ={confirmHandler}/></View>
            </View>
            </Card>
            

           {confirmOutput}

        </View>
        </TouchableWithoutFeedback>
    )
    
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding:10,
        alignItems: "center",
        justifyContent:"flex-start",
        fontFamily:'open-sans-bold'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems:'center'
        
    },
    buttonContainer:{
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal: 15
    },
    button:{
        width:100,
        
    },
    input: {
        width:50,
        textAlign:'center'
    },
    confirmNumber:{
        marginTop: 20,
        alignItems:'center'
       
    },
    
})

export default StartGameScreen;
