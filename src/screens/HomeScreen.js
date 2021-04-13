import React from 'react'
import {Stylesheet,View,Button,Text, StyleSheet, ImageBackground,Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import background from '../../assets/mainbackground.png'
import Card from '../component/cardview'


const {width,height} = Dimensions.get("screen");
const HomeScreen = ()=>{
    return ( 
    <View>
     
     <ImageBackground source={background} style={{width: '100%', height: '100%'}}  >
     <Text style={HomeStyle.textStyle}>Welcome Nilofar</Text>
     <ScrollView>
     <Card />
     </ScrollView>
     </ImageBackground>
     </View>
     
    );
} 

const HomeStyle= StyleSheet.create({
  textStyle:{
      fontSize:35,
      color:'white',
      left:width/8,
      height:height/9,
      top:height/8

  }
});

export default HomeScreen;