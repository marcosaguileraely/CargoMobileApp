import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default class loginView extends Component{

    constructor(){
        super();
        this.state = {
            title : 'I am a login window',
            username: '',
            password: ''
        }
    }

    // Render function
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Hey! I'm a login :)</Text>
            <Image
              style={styles.cargoLogo}
              source={require('./assets/images/CargoLogo.png')}
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              placeholderTextColor= "#000000"
              placeholder="Usuario"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              placeholderTextColor= "#000000"
              placeholder= "****"
            />
            <Button
              title="Acceder"
              color="#841584"
              accessibilityLabel="Acceder"
            />
          </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F2C314',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    cargoLogo: {
      marginBottom: 10,
      width: 180,
      height: 180
    },
    inputStyle:{
      height: 35,
      width: 250,
      borderColor: '#000000',
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 3,
      marginBottom: 10,
      backgroundColor: '#FCD116'
    }
  });