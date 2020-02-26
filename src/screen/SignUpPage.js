import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text, Avatar} from 'react-native-paper';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      email: '',
      pass: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Avatar.Text size={50} label="RE" />
          <Text style={styles.logoText}>Registration</Text>
        </View>
        <TextInput
          style={styles.child}
          mode={'outlined'}
          label="Firstname"
          value={this.state.firstname}
          //   onChangeText={text => this.setState({text})}
        />
        <TextInput
          style={styles.child}
          mode={'outlined'}
          label="Surname"
          value={this.state.surname}
          //   onChangeText={text => this.setState({text})}
        />
        <TextInput
          style={styles.child}
          mode={'outlined'}
          label="Email"
          value={this.state.email}
          //   onChangeText={text => this.setState({text})}
        />
        <TextInput
          style={styles.child}
          mode={'outlined'}
          label="Password"
          value={this.state.pass}
          //   onChangeText={text => this.setState({text})}
        />
        <TextInput
          style={styles.child}
          mode={'outlined'}
          label="Confirm Password"
          //   onChangeText={text => this.setState({text})}
        />
        <Button
          style={[styles.child, styles.btn]}
          icon="login"
          mode="contained"
          onPress={() => alert('hello')}>
          Sign UP
        </Button>
      </View>
    );
  }
}
export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
  },
  child: {
    // margin: ,
    // marginVertical
  },
  btn: {
    height: 50,
    alignItems: 'center',
    fontSize: 30,
    color: '#232653',
    justifyContent: 'center',
    marginTop: 8,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 5,
  },
  logoText: {
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fd5335',
  },
});
