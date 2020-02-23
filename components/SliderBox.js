import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

class SliderBox extends React.Component {

    state = {price:"2000", minRating:"1"}
    
    render(){
        return (
            <View style={styles.container}>
                <Slider onValueChange={value => this.setState({price:Math.round(value*100)/100})}  value={2000} minimumValue={0} maximumValue={2000} style={{width: 200, height: 40}} /> 
                <Text>Price: {this.state.price}</Text>
                <Slider onValueChange={value => this.setState({minRating:Math.round(value*10)/10})} value={1} minimumValue={1} maximumValue={5} style={{width: 200, height: 40}} />
                <Text>Minimum Rating: {this.state.minRating}</Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    }
})

export default SliderBox