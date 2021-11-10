//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useState } from 'react';
import { View, Text,Alert, StyleSheet, TextInput, Image } from 'react-native';
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import {signIn, Signup} from '../services';
require ("firebase/auth")
import {firebase} from '../config/firebaseConfig'

// create a component
const login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
          alert('Email field is required.');
        }
    
        if (!password) {
          alert('Password field is required.');
        }
        if (email && password) {
            signIn(email,password)
            const user = firebase.auth().currentUser;
            if(user){
                navigation.navigate('HomeScreen')
                setEmail('');
                setPassword('');
            }
          
        }

    };



return (
    <View style={styles.container}>
        <Image source={require('../assets/reactLogo.jpg')} style={styles.logoImg} />
        <Text style={styles.txtBoldWieight}>Welcome Back</Text>
        <Text style={{ color: 'lime', }}>Sign in to your account:</Text>

        <TextInput
                style={styles.formInput1}
                placeholder="Enter your email"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.formInput1}
                placeholder="Enter your password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}  onPress={handlePress}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>


    </View>
);
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    formInput1: {
        
        padding: 12,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    
        borderRadius: 10,
        textAlign: 'center',
        height: 40,
        width: 250,
        borderColor: 'lime',
        borderWidth: 2,
    },
    button: {
        flex: 1,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lime',
        borderRadius: 10,
        textAlign: 'center',
        height: 40,
        width: 250,
        borderColor: 'green',
        borderWidth: 2,
    },
    BtnGoogle: {
        flex: 1,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        textAlign: 'center',
        height: 40,
        width: 220,
        borderColor: 'black',
        borderWidth: 2,
    },
    TxtColor: {
        color: 'white',
    },

    InlineBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtBoldWieight: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 20,
    },
    logoImg: {
        marginBottom: 50,
        height: 100,
        width: 100,
        borderColor: 'green',
        borderRadius: 75,
        borderWidth: 2
    }


});

//make this component available to the app
export default login;
    

