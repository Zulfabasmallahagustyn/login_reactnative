import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
    	<View style={styles.container}>
    	<Image 
    	style={{width:100,height:100}}
    	source={require('./vine.png')} />
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Username or Email"
    	/>
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Password"
    	secureTextEntry={true}
    	/>
    	<TouchableOpacity style={styles.button}>
    	<Text style={styles.buttonText}> LOGIN </Text>
    	</TouchableOpacity>

    	<TouchableOpacity>
    	<Text>Forget the password?</Text>
    	</TouchableOpacity>
    	</View>    	
    );
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#01B488'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
		color: '#fff'
	},

	button:{
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		marginVertical: 10,
		paddingHorizontal: 80
	},

	buttonText:{
		fontSize:13,
		color:'#01B488'
	}
})"# login_reactnative" 
