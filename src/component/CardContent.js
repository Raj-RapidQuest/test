import React from 'react'
import {Image,Text,View,StyleSheet,Card} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider } from 'react-native-elements';


const InnerContent = props =>{
    return (
        <View style={cardContentStyle.innerContentStyle}>
             <Image style={cardContentStyle.innerContentImage}  source={props.imageSrc}/>
            <View style={cardContentStyle.innerContent}>
                <Text>{props.heading}</Text> 
                <Text>{props.subHeading}</Text>
            </View> 
            <MaterialCommunityIcons name="chevron-right" color={'#a832a6'} size={40} />     
        </View>
    );
}

const HeadingComponent = props =>{
    return (
        <View style={cardContentStyle.textStyle}>
            <Text style={cardContentStyle.textNumberStyle}>{props.heading}</Text>
            <Text>{props.subHeading}</Text>
        </View>
           
    );
}
const cardContentStyle = StyleSheet.create({
      innerContentStyle:{
         marginBottom:20,
         padding:10 ,
         flexDirection:'row',
         marginTop:30,
         justifyContent:'space-between'
      },
      innerContentImage:{
         width:45,
         height:45,
         marginHorizontal:10, 
      },
      innerContent:{
        marginLeft: 20,
        flex:8
      },
      textStyle:{
       alignItems: 'center',
       flex:1
           
    },
      textNumberStyle:{
       fontSize:40,
       fontWeight:'500',
       color:'#a832a6'
      },


});

export {InnerContent,HeadingComponent};
