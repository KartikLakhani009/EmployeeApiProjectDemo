import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Drawer
import {createDrawerNavigator} from 'react-navigation-drawer';

// import {reanima} from 'react-native-reanimated';
import Drawercomponet from '../screen/Drawercomponet';

//Screen
import HomeScreen from '../screen/HomeScreen';
import WelcomeScreen from '../screen/WelcomeScreen';

const AutoStack = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  WelcomeScreen: {screen: WelcomeScreen},
});

const DrawerNavigation1 = createStackNavigator({
  HomeScreen: {screen: HomeScreen}, //identification screen or define screen
  WelcomeScreen: {screen: WelcomeScreen},
});

const MyDrawerNavigation = createDrawerNavigator(
  {
    DrawerNavigator: {screen: DrawerNavigation1},
  },
  {
    drawerWidth: '60%',
    drawerPosition: 'left',
    drawerType: 'slide',
    contentComponent: () => <Drawercomponet />,
  },
);

const AuthStack = createStackNavigator(
  {
    MyDrawerNavigation,
    AutoStack,
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
