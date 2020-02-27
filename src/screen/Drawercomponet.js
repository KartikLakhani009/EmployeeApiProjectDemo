import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Drawer} from 'react-native-paper';
// import {AppImage} from '../Images';

const [WelcomeScreen, EmployeeList] = [0, 1];
let DRAWER = [
  {
    id: 0,
    screen: 'WelcomeScreen',
    title: 'Welcome Screen Test',
    active: true,
  },
  {
    id: 1,
    screen: 'EmployeeList',
    title: 'Employee List',
    active: false,
  },
];

class Drawercomponet extends Component {
  selectedItem = item => {
    console.log('Function Called');
    const {navigation} = this.props;
    switch (item.id) {
      case WelcomeScreen:
        navigation.navigate(item.screen);
        break;
      case EmployeeList:
        navigation.navigate(item.screen);
        break;
    }
  };

  render() {
    return (
      <View>
        <View style={Styles.Userbg}>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
            <Icon name="user" size={100} color="#fff" />
            <Text style={{color: '#fff', fontSize: 18}}>User</Text>
          </TouchableOpacity>
        </View>

        {DRAWER.map(item => {
          return (
            <Drawer.Item
              key={item.id}
              label={item.title}
              active={item.active === true}
              onPress={() => {
                DRAWER.map(
                  i =>
                    (i.active === true ? (i.active = false) : null) &&
                    (i === item ? (i.active = true) : null),
                );
                alert('Item screen : ' + item.screen);
              }}
            />
          );
        })}

        {/* <FlatList
          style={{flexDirection: 'row'}}
          data={DRAWER}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, key}) => (
            <Drawer.Item
              label={item.title}
              active={true}
              onPress={() => {
                alert('Item', item.screen);
              }}
            />
          )}
        /> */}
      </View>
    );
  }
}

export default withNavigation(Drawercomponet);

const Styles = StyleSheet.create({
  Userbg: {
    backgroundColor: '#851240',
    height: 150,
  },

  ProfilePic: {
    height: 50,
    width: 50,
    marginLeft: 20,
    borderRadius: 50,
  },
  MenuStyle: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#4dd',
    justifyContent: 'space-evenly',
    margin: 2,
  },
  ListGreen: {
    // minWidth: 200,
    marginHorizontal: 10,
    height: 50,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2AC062',
    display: 'flex',
    borderRadius: 5,
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
  },
  TextWhite: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    // textDecorationLine: 'underline',
    // textDecorationColor: 'red',
    // textDecorationStyle: 'solid',
    //Not Working
  },
});
