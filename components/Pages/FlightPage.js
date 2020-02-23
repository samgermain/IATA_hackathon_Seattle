import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FlightPage extends React.Component {
  render(){
    const { navigation } = this.props
    const booking = navigation.state.params.booking
    const flights = booking.flights
    const price = booking.price
    const overallRating = booking.overallRating
    const ratings = booking.ratingDetails
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.flightNames}>
            {flights.map(flight =>
            <View>
              <Text>{flight.airline} | {flight.flightNumber} | {flight.aircraftType}</Text>
              <Text>{flight.origin}→{flight.destination}</Text>
            </View>
            )}
          </View>
          <View>
            <Text>${price}</Text>
            <Text>{overallRating}</Text>
          </View>
        </View>
        <View style={styles.ratings}>
          {ratings.map(rating => <RatingBox key={rating.actor} rating={rating}/>)}
        </View>
      </View>
    );
  }
}

const TypeLabel = (props) => {
  return (
      <View style={styles.typeOverlay}>
          <Text>{props.type}</Text>
      </View>
  )
}

const RatingBox = (props) => {
  const actor = props.rating.actor
  const type = props.rating.type
  const rating = props.rating.rating
  return (
    <View style={styles.ratingBox}>
      <TypeLabel type={type} /> 
      <View style={styles.ratingAtt}><Text>{actor}</Text></View>
      <View style={styles.ratingAtt}><Text>{rating}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:"#EFE",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  flightNames: {
    flexDirection: "column"
  },
  ratingAtt: {
    width: 120,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingBox: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  ratings:{

  },
  typeOverlay:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: 0
  }
});

export default FlightPage