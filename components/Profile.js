import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,AsyncStorage,Redirect  } from 'react-native';
import axios from 'axios';

export default class Profile extends React.Component {
    state={
      email:"",
      loading: false,
      message : "",
      error : false
    }
render(){
    return(
    <View style={styles.container}>
    <Text style={styles.logo}>Hola</Text>
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
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });
  