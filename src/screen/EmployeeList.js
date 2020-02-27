import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import {List} from 'react-native-paper';

//hoc
import WithEmployee from '../hoc/WithEmployee';
import WithLoader from '../hoc/WithLoader';

import {AppImage} from '../Images';

class EmployeeList extends Component {
  componentDidMount = () => {
    console.log('componentDidMount called');
    // , this);

    if (this.props.employee.firstTime === false) {
      // this.props.TurnOnLoaderDispatch(false);
      this.props.GetEmpAPIDispatch();

      let data = this.props.employee.emp;
      console.log('this.props.employee.emp :', data);
    }
  };

  render() {
    const {employee} = this.props;
    return (
      <View style={styles.container}>
        {/* <View style={([styles.container, styles.horizontal], {marginTop: 10})}>
           <ActivityIndicator size="large" color="#0000ff" /> 
           {this.props.loader == true && (
            <ActivityIndicator size="large" color="#00ff00" />
          )} 
          }<ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
        </View> */}

        {employee.emp.map(e => {
          return (
            <List.Item
              key={e.id}
              style={{marginTop: 10}}
              title={e.name}
              description={e.age}
              left={props => (
                <Image
                  source={{uri: '../Images/Motive1.jpeg'}}
                  style={{width: 50, height: 50}}
                />
              )}
            />
          );
        })}
        {/* <Text>Hello</Text>
        <FlatList
          data={employee.emp}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.buttonGreen}
              onPress={() => {
                alert('button pressed');
              }}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                {'Emp NAme :' + item.id}
              </Text>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                {'Emp NAme :' + item.employee_name}
              </Text>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                {'salary :' + item.employee_salary}
              </Text>
            </TouchableOpacity>
          )}
        /> */}
      </View>
    );
  }
}
export default WithLoader(WithEmployee(EmployeeList));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buttonGreen: {
    marginBottom: 5,
    minWidth: 350,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2AC062',
    display: 'flex',
    borderRadius: 10,
    // borderRadius: 5,
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
  },
});
