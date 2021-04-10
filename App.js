import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';

const UsersManager = createStackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: Login },
	Register: {screen: Register},
	Profile: {screen: Profile}

 });
export default createAppContainer(UsersManager)
