import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Register extends React.Component {
  render() {
    return (
        <View>
            <Button
                title="Back to Login"
                onPress={() =>
                this.props.navigation.navigate('Login')
                }
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });
