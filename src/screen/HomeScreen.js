import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

const list = [
  {
    id: 901,
    screen: 'WelcomeScreen',
    title: 'Welcome Screen Test',
  },
  {
    id: 902,
    screen: 'EmployeeList',
    title: 'Employee List',
  },
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={Styles.buttonGreen}
          onPress={() => this.props.navigation.openDrawer()}>
          <Text style={Styles.TextWhite}>DrawerBtn</Text>
        </TouchableOpacity>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={Styles.MenuStyle}
              onPress={() => {
                this.props.navigation.navigate(item.screen);
              }}>
              <Text style={[Styles.TextWhite, {padding: 5}]}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  MenuStyle: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#4dd',
    justifyContent: 'space-evenly',
    margin: 2,
  },
  buttonGreen: {
    minWidth: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2AC062',
    display: 'flex',
    borderRadius: 5,
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
  },
  TextWhite: {color: 'white', textAlign: 'center', fontSize: 16},
});
