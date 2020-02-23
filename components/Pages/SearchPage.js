<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import SliderBox from '../SliderBox'
import SearchButton from '../SearchButton'
import RNPickerSelect from 'react-native-picker-select'
import {airportList, getAirportCityNameAndCodeMap} from '../AirportList.js'
import DatePicker from '../MyDatePicker'
=======
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SliderBox from "../SliderBox";
import SearchButton from "../SearchButton";
import RNPickerSelect from "react-native-picker-select";
import { airportList, getAirportCityNameAndCodeMap } from "../AirportList.js";
>>>>>>> d927bcfa7e5936fcc1dc4d2059f43c752b31d97d

const SearchText = props => {
  return (
    <View style={styles.searchText}>
      <Text>{props.text}</Text>
    </View>
  );
};

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    state: {
      origin: "";
      destination: "";
    }
    return (
<<<<<<< HEAD
      <ImageBackground style={styles.background} source={require('../../assets/airplane.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.searchBox}>
            <View style={styles.searchRow}>
                <SearchText text="From: " />
                {/* <TextInput style={styles.searchField} onChangeText={text => this.setState({origin:text})} ></TextInput> */}
                <View style={styles.searchForAirport}>
                <RNPickerSelect
                  style={styles.container}
                  onValueChange={(label) => this.setState({origin:label})}
                  items={getAirportCityNameAndCodeMap(airportList)}
                />
                </View>
            </View>
            <View style={styles.searchRow}>
                <SearchText text="To: " />
                <View style={styles.searchForAirport}>
                <RNPickerSelect
                  style={styles.container}
                  onValueChange={(label) => this.setState({destination:label})}
                  items={getAirportCityNameAndCodeMap(airportList)}
                />
                </View>
            </View>
            <View style={styles.searchRow}>
                <SearchText text="Date : " />
                {/* <DatePicker /> */}
                <TextInput style={styles.searchField} onChangeText={text => this.setState({departureDate:text})} ></TextInput>
                {/* <Text style={styles.searchText}>→</Text>
=======
      <View style={styles.searchBox}>
        <View style={styles.searchRow}>
          <SearchText text="From: " />
          {/* <TextInput style={styles.searchField} onChangeText={text => this.setState({origin:text})} ></TextInput> */}
          <RNPickerSelect
            style={styles.container}
            onValueChange={label => this.setState({ origin: label })}
            items={getAirportCityNameAndCodeMap(airportList)}
          />
        </View>
        <View style={styles.searchRow}>
          <SearchText text="To: " />
          <RNPickerSelect
            style={styles.container}
            onValueChange={label => this.setState({ destination: label })}
            items={getAirportCityNameAndCodeMap(airportList)}
          />
        </View>
        <View style={styles.searchRow}>
          <SearchText text="Date : " />
          {/* <DatePicker /> */}
          <TextInput
            style={styles.searchField}
            onChangeText={text => this.setState({ departureDate: text })}
          ></TextInput>
          {/* <Text style={styles.searchText}>→</Text>
>>>>>>> d927bcfa7e5936fcc1dc4d2059f43c752b31d97d
                <TextInput style={styles.searchField} onChangeText={text => this.setState({endDate:text})} ></TextInput> */}
        </View>
<<<<<<< HEAD
        </ImageBackground>
        );
    }
=======
        <SliderBox />
        <SearchButton navigation={this.navigation} getArguments={this.state} />
      </View>
    );
  }
>>>>>>> d927bcfa7e5936fcc1dc4d2059f43c752b31d97d
}

/**
 * Page to search for flights and display the WC Grade for each flight
 */
class SearchPage extends React.Component {
  state = { search: "" };

  render() {
    return (
      <View style={styles.container}>
        <SearchBox navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  container: {
    flex: 1,
<<<<<<< HEAD
    
    backgroundColor: '#a3eeff',
    alignItems: 'center',
    justifyContent: 'center',
=======
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center"
>>>>>>> d927bcfa7e5936fcc1dc4d2059f43c752b31d97d
  },
  searchButton: {
    marginTop: 20,
    backgroundColor: "#24D9E8",
    borderRadius: 5,
    padding: 5
  },
  searchForAirport: {
    backgroundColor: 'white',
    borderRadius: 1
  },
  searchBox: {
<<<<<<< HEAD
    alignItems: "center",
    marginTop: 60
=======
    alignItems: "center"
>>>>>>> d927bcfa7e5936fcc1dc4d2059f43c752b31d97d
  },
  searchField: {
    width: 100,
    height: 25,
    backgroundColor: "#fff"
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  searchText: {
    width: 50,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default SearchPage;
