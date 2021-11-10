//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';

// create a component
const ForgotPassword = () => {
const [email, setEmail] = useState('')
const reset = () =>{
    resetPassword(email)
}

    return (
        <View style={styles.container}>
             <Image source={require('../assets/reactLogo.jpg')} style={styles.logoImg}
            />
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Reset you password</Text>
            <Text style={styles.text}
            >Enter an email address and we will send a reset password link</Text>

            <TextInput
                style={styles.formInput1} 
                placeholder="Enter your email"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />

            <TouchableOpacity style={styles.button1} onPress={reset}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
}; 

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    logoImg:{
        height:100,
         width:100,
         marginBottom:50,
         borderRadius:75,
    },
    formInput1:{
        borderColor: 'lime',
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 3,
        margin:5,
    },
    button1: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'lime',
        height: 40,
        width: 260,
        borderColor: 'lime',
        borderWidth:2,
        margin:5,

    },
});

//make this component available to the app
export default ForgotPassword;
