import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Hello= ()=>{
    return (
    <View style={HelloStyle.textstyle}>
        <Text >Say Hello</Text>
    </View>
    );
}
const HelloStyle= StyleSheet.create({
    textstyle:{
        alignItems: 'center',
        flex:1,
        color:'black',
        justifyContent:'center'
        
    }
});
export default Hello;