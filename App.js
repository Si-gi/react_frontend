import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,AsyncStorage  } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import axios from 'axios';
import Register from "./components/Register";
import Login from "./components/Login";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
              <NavigationContainer>
                  <Tab.Navigator
                      tabBarOptions={{
                          activeTintColor: "tomato",
                          inactiveTintColor: "#fff",
                          style: {
                              backgroundColor: "#3A3E42",//color you want to change
                          }
                      }}
                  >
                      <Tab.Screen name="Register" component={Register} />
                      <Tab.Screen name="Login" component={Login} />
                  </Tab.Navigator>
              </NavigationContainer>
          </View>
  );
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
