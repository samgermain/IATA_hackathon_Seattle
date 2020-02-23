import * as React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';
export default class App extends React.Component {
  getAirportCityNameAndCodeMap(airportList) {
    let airportCityNameAndCodeMap = [];
    airportList.forEach(airport => {
      airportCityNameAndCodeMap.push({
        label: airport.city + ' - ' + airport.iatacode,
        value: airport.iatacode,
      });
    });
    return airportCityNameAndCodeMap;
  }
  render() {
    const airportList = [
      {
        name: 'Arlanda',
        city: 'Stockholm',
        country: 'Sweden',
        timezone: 'Europe/Stockholm',
        lat: 59.651944,
        lng: 17.918611,
        terminal: null,
        gate: null,
        icaocode: 'ESSA',
        iatacode: 'ARN',
      },
      {
        name: 'Barcelona',
        city: 'Barcelona',
        country: 'Spain',
        timezone: 'Europe/Madrid',
        lat: 41.297078,
        lng: 2.078464,
        terminal: null,
        gate: null,
        icaocode: 'LEBL',
        iatacode: 'BCN',
      },
      {
        name: 'Charles De Gaulle',
        city: 'Paris',
        country: 'France',
        timezone: 'Europe/Paris',
        lat: 49.012779,
        lng: 2.55,
        terminal: null,
        gate: null,
        icaocode: 'LFPG',
        iatacode: 'CDG',
      },
      {
        name: 'Dubai Intl',
        city: 'Dubai',
        country: 'United Arab Emirates',
        timezone: 'Asia/Dubai',
        lat: 25.252778,
        lng: 55.364444,
        terminal: null,
        gate: null,
        icaocode: 'OMDB',
        iatacode: 'DXB',
      },
      {
        name: 'Frankfurt Main',
        city: 'Frankfurt',
        country: 'Germany',
        timezone: 'Europe/Berlin',
        lat: 50.026421,
        lng: 8.543125,
        terminal: null,
        gate: null,
        icaocode: 'EDDF',
        iatacode: 'FRA',
      },
      {
        name: 'Heathrow',
        city: 'London',
        country: 'United Kingdom',
        timezone: 'Europe/London',
        lat: 51.4775,
        lng: -0.461389,
        terminal: null,
        gate: null,
        icaocode: 'EGLL',
        iatacode: 'LHR',
      },
      {
        name: 'Franz Josef Strauss',
        city: 'Munich',
        country: 'Germany',
        timezone: 'Europe/Berlin',
        lat: 48.353783,
        lng: 11.786086,
        terminal: null,
        gate: null,
        icaocode: 'EDDM',
        iatacode: 'MUC',
      },
      {
        name: 'Ruzyne',
        city: 'Prague',
        country: 'Czech Republic',
        timezone: 'Europe/Prague',
        lat: 50.100833,
        lng: 14.26,
        terminal: null,
        gate: null,
        icaocode: 'LKPR',
        iatacode: 'PRG',
      },
      {
        name: 'Riga Intl',
        city: 'Riga',
        country: 'Latvia',
        timezone: 'Europe/Riga',
        lat: 56.923611,
        lng: 23.971111,
        terminal: null,
        gate: null,
        icaocode: 'EVRA',
        iatacode: 'RIX',
      },
      {
        name: 'Tegel',
        city: 'Berlin',
        country: 'Germany',
        timezone: 'Europe/Berlin',
        lat: 52.559686,
        lng: 13.287711,
        terminal: null,
        gate: null,
        icaocode: 'EDDT',
        iatacode: 'TXL',
      },
      {
        name: 'Geneve Cointrin',
        city: 'Geneva',
        country: 'Switzerland',
        timezone: 'Europe/Zurich',
        lat: 46.238064,
        lng: 6.10895,
        terminal: null,
        gate: null,
        icaocode: 'LSGG',
        iatacode: 'GVA',
      },
      {
        name: 'Kittila',
        city: 'Kittila',
        country: 'Finland',
        timezone: 'Europe/Helsinki',
        lat: 67.701022,
        lng: 24.84685,
        terminal: null,
        gate: null,
        icaocode: 'EFKT',
        iatacode: 'KTT',
      },
      {
        name: 'Eleftherios Venizelos Intl',
        city: 'Athens',
        country: 'Greece',
        timezone: 'Europe/Athens',
        lat: 37.936358,
        lng: 23.944467,
        terminal: null,
        gate: null,
        icaocode: 'LGAV',
        iatacode: 'ATH',
      },
      {
        name: 'Dublin',
        city: 'Dublin',
        country: 'Ireland',
        timezone: 'Europe/Dublin',
        lat: 53.421333,
        lng: -6.270075,
        terminal: null,
        gate: null,
        icaocode: 'EIDW',
        iatacode: 'DUB',
      },
      {
        name: 'San Francisco Intl',
        city: 'San Francisco',
        country: 'United States',
        timezone: 'America/Los_Angeles',
        lat: 37.618972,
        lng: -122.374889,
        terminal: null,
        gate: null,
        icaocode: 'KSFO',
        iatacode: 'SFO',
      },
      {
        name: 'Seattle Tacoma Intl',
        city: 'Seattle',
        country: 'United States',
        timezone: 'America/Los_Angeles',
        lat: 47.449,
        lng: -122.309306,
        terminal: null,
        gate: null,
        icaocode: 'KSEA',
        iatacode: 'SEA',
      },
    ];
    return (
      <View style={styles.container}>
        <Text>Select Airport</Text>
        <RNPickerSelect
          style={styles.container}
          onValueChange={(label) => console.log(label)}
          items={this.getAirportCityNameAndCodeMap(airportList)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});