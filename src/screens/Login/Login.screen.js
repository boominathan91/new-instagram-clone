import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Login.style';

export default class Login extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Register')}>
          Login
        </Text>
      </View>
    );
  }
}