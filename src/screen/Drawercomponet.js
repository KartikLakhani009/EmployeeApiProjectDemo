import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
// import {AppImage} from '../Images';

const [WelcomeScreen] = [0];
const DRAWER = [
  {
    id: 901,
    screen: 'WelcomeScreen',
    title: 'Welcome Screen Test',
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
    }
  };

  render() {
    return (
      <View>
        <FlatList
          style={{flexDirection: 'row'}}
          data={DRAWER}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, key}) => (
            <View style={{padding: 3, marginTop: 35}}>
              <TouchableOpacity
                style={Styles.ListGreen}
                onPress={() => this.selectedItem(item)}>
                <Text style={Styles.TextWhite}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

export default withNavigation(Drawercomponet);

const Styles = StyleSheet.create({
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
