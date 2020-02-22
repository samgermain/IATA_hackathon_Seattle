import React from 'react';
import { StyleSheet, View, Slider } from 'react-native';

var SliderBox = () => {

    state = {value:"5"}
    
    return (
        <View>
            <Slider minimumValue={0} maximumValue={50} style={{width: 200, height: 40}} /> 
            <Slider minimumValue={0} maximumValue={50} style={{width: 200, height: 40}} /> 
        </View>
    );
}

export default SliderBox