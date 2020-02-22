import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SliderBox from '../SliderBox'
import SearchButton from '../SearchButton'

const SearchBox = (props) => {

    state:{
        from:"";
        to:"";
        startDate:"";
        endDate:""
    }

    return (
        <View style={styles.searchBox}>
            <View style={styles.searchRow}>
                <Text>From</Text>
                <TextInput style={styles.searchField} onChangeText={text => this.setState({from:text})} ></TextInput>
                <Text>To</Text>
                <TextInput style={styles.searchField} onChangeText={text => this.setState({to:text})} ></TextInput>
            </View>
            <View style={styles.searchRow}>
                <Text>Dates</Text>
                <TextInput style={styles.searchField} onChangeText={text => this.setState({startDate:text})} ></TextInput>
                <Text>→</Text>
                <TextInput style={styles.searchField} onChangeText={text => this.setState({endDate:text})} ></TextInput>
            </View>
            <SearchButton navigation={props.navigation} getArguments={this.state} />
        </View>
        );
}

/**
 * Page to search for flights and display the WC Grade for each flight
 */
class SearchPage extends React.Component {
  
    state = {search:""}

    render(){
        return (
            <View style={styles.container}>
                <SearchBox navigation={this.props.navigation} />
                <SliderBox />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    marginTop: 20,
    backgroundColor: '#24D9E8',
    borderRadius: 5,
    padding: 5
  },
  searchBox: {
    alignItems: "center",
  },
  searchField: {
      width: 50,
      height: 25,
      backgroundColor: '#fff'
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center"
  },
});

export default SearchPage