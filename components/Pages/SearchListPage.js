import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import SliderBox from '../SliderBox'

const FlightDetails = (props) => {
    const flight=props.flight
    return (
        // "airline": "KL",
        // "flightNumber": 1234,
        // "oigin": "NCE",
        // "destination": "AMS",
        // "aircraft": "KL-A180"

            <View style={styles.flightDetails}>
                <View style={styles.fdTop}>
                    <Text>Airline: {flight.airline}</Text>
                    <Text>Flight#: {flight.flightNumber}</Text>
                    <Text>{flight.aircraftType}</Text>
                </View>
                <Text style={styles.locations}>{flight.origin}→{flight.destination}</Text>
            </View>
    )
}



const BookingCell = (props) => {
    let randomKey = 0
    return (
        <TouchableOpacity 
            style={styles.bookingCellContainer}
            onPress={() => props.navigation.navigate("Flight", {booking: props.booking})}
        >
            <View style={styles.bookingCell}>
                <View>
                    {props.booking.flights.map(flight => {randomKey=randomKey+1; return <FlightDetails key={randomKey} flight={flight} />})}
                </View>
                <View style={styles.bookingCellRight}>
                    <Text>${props.booking.price}</Text>
                    <Text>{props.booking.overallRating}</Text>
                </View>
    {/*            <Text>{props.booking.ratingDetails}</Text> */}
            </View>
        </TouchableOpacity>
    );
}

class SearchListPage extends React.Component {
    render(){
        const { navigation } = this.props;
        let randomKey=1
        return (
            <View>
                <SliderBox/>
                <ScrollView>
                    {navigation.getParam('request').offers.filter(offer => offer.price < 500).map(booking => { randomKey=randomKey+1; return <BookingCell key={randomKey} navigation={navigation} booking={booking}/>})}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  bookingCell: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: 'hidden',

  },
  bookingCellContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  },
  bookingCellRight: {
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fdTop: {

  },
  flightDetails: {
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 5,
      backgroundColor: "#ddd",
      alignItems: "center"
  },
  locations:{
      margin: 10,
      fontSize: 16
  }
});

export default SearchListPage