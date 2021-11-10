import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import React, { Component, useEffect,useState, MaterialIcons } from 'react';
//import { View, Text,TextInput,  StyleSheet,data, Alert } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTasks,getUserInfo, getCompleteTasksCount, getCompletedTasksCount, getTasks, loggingOut } from '../services';
import {firebase} from '../config/firebaseConfig';
import {signIn} from '../services';
require('firebase/auth')

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

// create a component
const Profile = ({ navigation }) => {
    const [taskItems, setTaskItems] = useState([])
    const [taskCItems, setTaskCItems] = useState([]);
    const [taskPItems, setTaskPItems] = useState([]);
    const [firstName, setFirstName] = useState([]);
 
    const currentUser = firebase.auth().currentUser;
    let list = []
    const addTask = () => {
        setTaskItems([...taskItems, task])
        setTask("")
        addTasks(task)
        fetchTask()
    }
    const fetchTask = async => {
        getTasks().then((data) => {
            list = data
            console.log(list);
            setTaskItems(list)
        })
    }


    const fetchTasks = async => {
        getTasks().then((data) => {
           list = data
           console.log(list);
           setTaskItems(list)
        })
     }
  
     const fetchUser= async => {
        getUserInfo().then((data) => {
           list = data
           console.log(list);
           setFirstName(list)
        })
     }
  
     const fetchCompleteTasksLength = async => {
        getCompleteTasksCount().then((data) => {
           list = data
           console.log(list);
           setTaskCItems(list)
        })
     }
     const fetchINCompleteTasksLength = async => {
        getCompletedTasksCount().then((data) => {
           list = data
           console.log(list);
           setTaskPItems(list)
        })
     }
     console.log(taskCItems);
     console.log(taskPItems);
     console.log(firstName);
  
     useEffect(() => {
        fetchTasks()
        fetchUser()
        fetchCompleteTasksLength()
        fetchINCompleteTasksLength()
     }, [])
  

    const signOut = () => {
        loggingOut().then(
            navigation.navigate('Welcome')
        )
    }

    const handlePress = () => {
        loggingOut().then(
            navigation.navigate('Welcome')
        )
    }

    return (
        <ScrollView>
            <View style={styles.Inlinebutton}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={30}
                        style={{ color: 'black' }} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                    onPress={handlePress}>
                    <MaterialCommunityIcons
                        name="power"
                        size={30}
                        style={{ color: 'black', marginLeft: 10 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>
            {
                  firstName.map((item, index) => {
                     return (
                        <View key={index} style={styles.usernameCenter}>
                           {/* <TaskView text={item.task} status={'Complete'} /> */}
                           <Text style={styles.username}> {item.firstname}</Text>
                           <Text>{item.email}</Text>
                        </View>
                     )
                  })
               }
            
                <IconButton
                    style={styles.Accbtn}
                    icon="account"
                    size={40}
                />
                <View style={styles.inputViewTask}>
                    <Text>Task Completed </Text>
                    <Text>Task In Progress</Text>
                </View>
                <View style={styles.ValueCountTask}>
                    <Text>{taskPItems}</Text>
                    <Text>{taskCItems} </Text>
                </View>

            </View>
            <View style={{ backgroundColor: '#F4F4F4' }}>
                {
                    taskItems.map((item, index) => {
                        return (
                            <View style={styles.rowTask} key={index}>
                                {/* <TaskView text={item.task} status={'Complete'} /> */}
                                <Text>{'\u2B24'}  {item.task}</Text>
                                <Text> {item.status}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
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
    container1: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'lime',
    },
    Inlinebutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    rowTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ValueCountTask: {
        margin: 5,
        height: 20,
        width: 180,
        borderColor: 'lime',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
     },
     username: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
     },
     usernameCenter: {
        alignItems: 'center',
        justifyContent: 'center',
     },
     inputViewTask: {
        margin: 5,
        height: 20,
        width: 240,
        borderColor: 'lime',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
     },
  
  
});

//make this component available to the app
export default Profile;

