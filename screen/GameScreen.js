import React, { useState, useRef, useEffect } from "react";
import {View, Text, StyleSheet, Button, Alert, ScrollView, FlatList } from "react-native";
import NumberContainer from "../components/NumberContainer"
import Card from "../components/Card"
import defaultStyle from "../constants/default-style";
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton'
import BodyText from '../components/BodyText'

const generateRandomBetween = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude)
    }else{
        return rndNum;
    }
}

const renderListItem =( listLength,itemData)=>(
<View  style ={styles.list}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
</View>)

const GameScreen = props =>{
    const initalGuesses = generateRandomBetween(1,100, props.userChoise)
    const [currentGuess, setCurrentGuess] = useState(initalGuesses)

    const [pastGuesses, setPastGuesses] = useState([initalGuesses.toString()]);
    const currentLow = useRef(1);
    const currentHight = useRef(100);


    const { userChoise, onGameOver } = props;

    useEffect(()=>{

        if(currentGuess === userChoise){


            onGameOver(pastGuesses.length);

        }
    }, [currentGuess,userChoise, onGameOver])

    const nextGuessHandler = direction =>{
        if(
            (direction === 'lower' && currentGuess < props.userChoise) || (direction ==='greater' 
        && currentGuess > props.userChoise)
        ){
            Alert.alert("Don't lie", "You know that is wrong:)" , [
                {text: "Sorry", style:"cancel"}
        ]);
            return;
           
        }
        
        if (direction === 'lower'){
            currentHight.current = currentGuess;
            
        }
        else  {
            currentLow.current = currentGuess;
        }
       const nextNumber =  generateRandomBetween(currentLow.current, currentHight.current, currentGuess);
       setCurrentGuess(nextNumber);
       //setRounds(curRounds  => curRounds +1);
       setPastGuesses(curPastGuesses =>[nextNumber.toString(),...curPastGuesses])
    }

    return(
        <View style = {styles.screen}>
            <Text style ={defaultStyle.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
            <MainButton   onPress ={nextGuessHandler.bind(this, 'lower')}><Ionicons name ="md-remove" size={24} color ="white"/></MainButton>
            <MainButton  onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name ="md-add" size={24} color ="white"/></MainButton>
            </Card>
            <View style = {styles.listContainer}>
           {/* <ScrollView contentContainerStyle={styles.listItem}>
                {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length -index))}
    </ScrollView>*/}
    <FlatList 
    keyExtractor={item => item} 
    data ={pastGuesses} 
    renderItem ={renderListItem.bind(this,pastGuesses.length)}
    contentContainerStyle={styles.listItem}
    />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    },
    listContainer:{
        flex:1,
      
        width:'60%'
    },
    listItem:{
        
        //alignItems:'center',
        justifyContent:'flex-end'
    },

    list:{
        borderColor:'#ccc',
        padding:15,
        borderWidth:1,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'100%'
        

    }
});

export default GameScreen;
