//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useState } from 'react';
import { View, Text,Alert, StyleSheet, TextInput, Image } from 'react-native';
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import {registration} from '../services';

// create a component
const signup = ({ navigation }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconf, setPasswordconf] = useState('');


    const handlePress = () => {
        if (!firstname) {
            alert('firstname field is required.');
          }
      
          if (!lastname) {
            alert('lastname field is required.');
          }
        if (!email) {
          alert('Email field is required.');
        }
    
        if (!password) {
          alert('Password field is required.');
        }
        if (firstname && email && password && passwordconf ) {
            navigation.navigate('HomeScreen')

            registration(email,password,lastname,firstname)
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setPasswordconf('');
        }

    };



return (
    <View style={styles.container}>
        <Image source={require('../assets/reactLogo.jpg')} style={styles.logoImg} />
        <Text style={styles.txtBoldWieight}>Welcome Back</Text>
        <Text style={{ color: 'lime', }}>Create an account</Text>
        <TextInput
                style={styles.formInput1}
                placeholder="First name*"
                autoCapitalize="none"
                value={firstname}
                onChangeText={(firstname) => setFirstname(firstname)}
            />
            <TextInput
                style={styles.formInput1}
                placeholder="Last name*"
                autoCapitalize="none"
                value={lastname}
                onChangeText={(lastname) => setLastname(lastname)}
            />
        <TextInput
                style={styles.formInput1}
                placeholder="Enter your email*"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.formInput1}
                placeholder="Enter your password*"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.formInput1}
                placeholder="Retype your password to confirm*"
                value={passwordconf}
                onChangeText={(passwordconf) => setPasswordconf(passwordconf)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}  onPress={handlePress}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            
            <Text>Already have an account?</Text>

            <TouchableOpacity style={styles.button}  onPress={handlePress}>
                <Text style={styles.buttonText}>Sign In</Text>
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
        textAlign: 'left',
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
export default signup;
