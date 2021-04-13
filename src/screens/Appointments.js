import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Appointments= ()=>{
    return (
    <View style={AppointmentsStyle.textstyle}>
        <Text>Appointments Here</Text>
    </View>
    );
}
const AppointmentsStyle= StyleSheet.create({
    textstyle:{
        alignItems: 'center',
        flex:1,
        color:'black',
        justifyContent:'center'     
    }
});
export default Appointments;