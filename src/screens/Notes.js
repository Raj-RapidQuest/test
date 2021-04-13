import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Notes= ()=>{
    return (
    <View style={Notestyle.textstyle}>
        <Text >Notes Here</Text>
    </View>
    );
}
const Notestyle= StyleSheet.create({
    textstyle:{
        alignItems: 'center',
        flex:1,
        color:'black',
        justifyContent:'center'
        
        
    }
});
export default Notes;