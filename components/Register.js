import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

export default class Register extends React.Component {
    state = {
        email :'',
        password : '',
        c_password : '',
        message : ''
    }

    register=(email,password) => {
        console.log("auth");
            this.setState({loading:true,message: ""});
            if(this.state.c_password != this.state.password){
              console.log("bad password");
                this.setState({message: "password are differents"});
                return;
            }
            
            let params = {
              "_username": email,
              "_password": password,
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
          //axios.defaults.auth = params;
            axios.post("http://91.166.191.86:49164/register",params, config)
              .then(async res =>{
                this.setState({loading: false});
                if(!res.data.errors){
                  await AsyncStorage.setItem("email", email);
                  await AsyncStorage.setItem("password", password);
                  console.log(res.data);
                }else{
                  console.log(res.data.errors);
                  this.setState({message: res.data.errors[0]})
                }
              })
              .catch(err => {
                console.log( err);
                this.setState({message: "Connection to server failed, try again later or check your connection", loading: false})
              })
          }
  render() {
    return (
        <View style={styles.container}>        
        <Text style={styles.logo}>Demo App</Text>      
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
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({c_password:text})}/>
        </View>
        <Button rounded style={styles.loginBtn} onPress={() => this.register(this.state.email,this.state.passwsord)}
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
    inputText:{
      height:50,
      color:"white"
    },
    inputView:{
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
  });
