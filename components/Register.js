import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Register extends React.Component {
  render() {
    return (

        <Button
        title="Back to Login"
        onPress={() =>
          this.props.navigation.navigate('Login')
        }
      />

    );
  }
}
