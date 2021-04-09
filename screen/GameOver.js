import React from 'react'
import { View , StyleSheet ,Text, Button,Image} from "react-native";
import MainButton from '../components/MainButton'
import BodyText from '../components/BodyText'



import TitleText from '../components/TitleText'

const GameOver = props => {
    return (
       <View style = {styles.screen}>
           <TitleText>The Game is Over</TitleText>
           <View style = {styles.imageBorder}>

           <Image 
          
           //source ={require('../assets/image2.png')} 
           source ={{uri:'https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images-e1581532611580.jpg'}}
           style ={styles.image}
           resizeMode="cover"/>
           </View>
           <TitleText>Number of rounds: {props.roundsNumber}</TitleText>
           <TitleText>Number was: {props.userNumber} </TitleText>
           <MainButton   onPress ={props.onRestart}>NEW GAME</MainButton>
       </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    imageBorder:{
        width: 300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor: "blue",
        overflow:'hidden',
        marginVertical:30
    },
    image:{
        width: '100%',
        height: "100%",
      
    }
})

export default GameOver

