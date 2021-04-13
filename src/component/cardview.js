import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { InnerContent, HeadingComponent } from './CardContent'
import { Divider } from 'react-native-elements';

const card = () => {
    return (
        <View style={cardStyle.card}>
            <View style={cardStyle.heaingCard}>
                <HeadingComponent heading='2' subHeading='Appointments' />
                <View style={{ borderWidth: 1, borderColor: '#d9d9d7', height: 50, marginHorizontal: 5 }} />
                <HeadingComponent heading='2' subHeading='Treatment Notes' />
                <View style={{ borderWidth: 1, borderColor: '#d9d9d7', height: 50, marginHorizontal: 5 }} />
                <HeadingComponent heading='3' subHeading='Invoices' />
            </View>
            <Divider style={{ backgroundColor: '#d9d9d7', height: 2 }} />
            <InnerContent imageSrc={require('../../assets/calendar.png')} heading='Todays Appiontment' subHeading='2 p.m - 4 p.m' />
            <Divider style={{ backgroundColor: '#d9d9d7', height: 2 }} />
            <InnerContent imageSrc={require('../../assets/notes.png')} heading='New Treatment Note' subHeading='Created' />
            <Divider style={{ backgroundColor: '#d9d9d7', height: 2 }} />
            <InnerContent imageSrc={require('../../assets/dollar.png')} heading='Todays Appiontment' subHeading='2 p.m - 4 p.m' />
        </View>
    );
}

const cardStyle = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 120,
        paddingHorizontal: 13,
        borderRadius: 20
    },
    heaingCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
        paddingVertical: 13
    }

}
);

export default card;