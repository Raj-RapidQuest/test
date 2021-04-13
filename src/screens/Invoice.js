import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Invoices= ()=>{
    return (
    <View style={InvoicesStyle.textstyle}>
        <Text >Invoices</Text>
    </View>
    );
}
const InvoicesStyle= StyleSheet.create({
    textstyle:{
        alignItems: 'center',
        flex:1,
        color:'black',
        justifyContent:'center'
        
    }
});
export default Invoices;