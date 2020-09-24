import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,AsyncStorage,Redirect  } from 'react-native';
import axios from 'axios';




export default class Login extends React.Component {
  state={
    email:"",
    password:"",
    loading: false,
    message : "",
    error : false
  }
  componentDidMount(){
    //this.login();
  }

  login= async ()=>{
    const email = await AsyncStorage.getItem("email");
    const password = await AsyncStorage.getItem("password");
    if(email && password){
      this.setState({email,password});
      this.authenticate(email,password);
    }
  }

  authenticate=(email,password) => {
    this.setState({loading:true,message: ""});
    let params = {
      "username": email,
      "password": this.state.password,
    }
    var config = {
      header: { 
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json',
        'Accept': '*/*',
        'Connection' : 'keep-alive',
        'Authorization' : 'Basic'
        },
    };
    axios.defaults.adapter = require('axios/lib/adapters/http');
    axios.withCredentials = true;
  axios.defaults.auth = params;
    axios.post("http://91.166.191.86:49164/login_check", params, config)
      .then(async res =>{
        this.setState({loading: false});
        if(!res.data.errors){
          await AsyncStorage.setItem("email", email);
          await AsyncStorage.setItem("password", password);
	  await AsyncStorage.setItem("token", res.data.token);
  console.log(res.data.token);
  return  <Redirect  to="/profile/" />
        }else{
          console.log(res.data.errors);
          this.setState({error: true});
          this.setState({message: res.data.errors[0]})
        }
      })
      .catch(err => {
        console.log( err.response.request );
	console.log(err);
        this.setState({error: true});
        this.setState({message: "Connection to server failed, try again later or check your connection", loading: false})
      })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Demo App</Text>
	<Text style={styles.forgot}> Site conçu à partir de ReactNative et une api symfony et hébérgé sur un raspberry PI </Text>
        {this.state.error ? 
        <View><Text> {this.state.message} </Text> </View> : null }
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <Button rounded style={styles.loginBtn} onPress={() => this.authenticate(this.state.email,this.state.passwsord)}
        title="Login"/>
  
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
