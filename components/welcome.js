//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source = {require('../assets/reactLogo.jpg')} style={styles.logoImg} />
            <Text style={styles.txtBoldWieight}>Welcome</Text>
            <View style={styles.InlineBtns}>
                <TouchableOpacity
                    style={styles.BtnLogin}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.TxtColor}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.BtnSignup}
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text>SignUp</Text>
                </TouchableOpacity>
            </View>
            <Text>OR</Text>
            <TouchableOpacity
                style={styles.BtnGoogle}
                onPress={() => navigation.navigate('Google')}>
                <Text style={styles.TxtColor}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text>Forgot Password</Text>
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
    BtnLogin: {
        flex: 1,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        textAlign: 'center',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 2,
    },
    BtnSignup: {
        flex: 1,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'light green',
        borderRadius: 10,
        textAlign: 'center',
        height: 40,
        width: 100,
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
    TxtColor:{
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
export default welcome;
