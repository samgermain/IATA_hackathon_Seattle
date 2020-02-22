import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
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
                    <Text>{flight.aircraft}</Text>
                </View>
                <Text style={styles.locations}>{flight.oigin}→{flight.destination}</Text>
            </View>
    )
    
}

const BookingCell = (props) => {
    return (
        <View style={styles.bookingCellContainer}>
        <View style={styles.bookingCell}>
            <View>
                {props.booking.flights.map(flight => <FlightDetails flight={flight} />)}
            </View>
            <View style={styles.bookingCellRight}>
                <Text>${props.booking.price}</Text>
                <Text>{props.booking.overalRating}</Text>
            </View>
{/*            <Text>{props.booking.ratingDetails}</Text> */}
        </View>
        </View>
    );
}

class SearchListPage extends React.Component {
    render(){
        const { navigation } = this.props;
        return (
            <View>
                <SliderBox/>
                <ScrollView>
                    {/*TODO: Add a key for the map function */}
                    {navigation.getParam('request').offers.map(booking => <BookingCell booking={booking}/>)}
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

    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#000',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  bookingCellContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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