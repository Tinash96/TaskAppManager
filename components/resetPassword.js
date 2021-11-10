//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TextInput } from 'react-native';

// create a component
const ResetPassword = ({navigation}) => {

    
    return (
        <View style={styles.container}>
       <Image source={require('../assets/reactLogo.jpg')} style={styles.logoImg}
            />
            <Text style={{fontSize:20, fontWeight: 'bold'}}>ForgotPassword</Text>
            <Text style={styles.text}>Enter an email address and we will send a reset password link</Text>

            <TextInput
                style={styles.formInput1} 
                placeholder="Enter your email"
                autoCapitalize="none"
           
            />

            <TouchableOpacity style={styles.botton} onPress={reset}>
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
        backgroundColor: '#2c3e50',
    },
    logoImg:{
        height:100,
         width:100,
         marginBottom:50,
         borderRadius:75,
    },
});

//make this component available to the app
export default ResetPassword;
