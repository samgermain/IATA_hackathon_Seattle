import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import SearchPage from './components/Pages/SearchPage'
import SearchListPage from './components/Pages/SearchListPage'
import FlightPage from './components/Pages/FlightPage'
import AttributePage from './components/Pages/AttributePage'
import ErrorPage from './components/Pages/ErrorPage'
import ProfilePage from './components/Pages/ProfilePage'
import BookingPage from './components/Pages/BookingPage'

const StackNavigator = createStackNavigator({
  Search: SearchPage,
  SearchList: SearchListPage,
  Flight: FlightPage,
  Att: AttributePage,
  Error: ErrorPage
},{
  initialRouteName: 'Search'
})

const TabNavigator = createBottomTabNavigator({
  Main: StackNavigator,
  Bookings: BookingPage,
  Profile: ProfilePage
},{
  initialRouteName: 'Main'
})

const AppContainer = createAppContainer(TabNavigator)

export default function App() {
  return (
    <AppContainer />
  );
}
