import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class BookingPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Just Kidding</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        width:"100%",
        height:"100%",
        alignItems:'center'
    }
})

export default BookingPage