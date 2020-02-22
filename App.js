import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import SearchPage from './components/Pages/SearchPage'
import SearchListPage from './components/Pages/SearchListPage'
import FlightPage from './components/Pages/FlightPage'
import AttributePage from './components/Pages/AttributePage'
import ErrorPage from './components/Pages/ErrorPage'

const StackNavigator = createStackNavigator({
  Search: SearchPage,
  SearchList: SearchListPage,
  Flight: FlightPage,
  Att: AttributePage,
  Error: ErrorPage
},{
  initialRouteName: 'Search'
})

const AppContainer = createAppContainer(StackNavigator)

export default function App() {
  return (
    <AppContainer />
  );
}
