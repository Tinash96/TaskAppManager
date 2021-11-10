//import liraries
import React, { Component, useEffect, useState, MaterialIcons } from 'react';
import { View, Text, TextInput, StyleSheet, data, Alert } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTasks, getTasks, getCompleteTasks, getIncompleteTasks , getUserInfo} from '../services';
import { firebase } from '../config/firebaseConfig';
import { signIn } from '../services';
require('firebase/auth')
// create a component
const HomeScreen = ({ navigation }) => {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])
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
        getCompleteTasks().then((data) => {
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
    useEffect(() => {
        fetchTask()
        getUserInfo();
        fetchUser()
    }, [])
  

    const handleAccount = () => {
        navigation.navigate('Profile')
    }
    const handlePressTask = () => {
        if (!task) {
            alert('task field is required*.');
        } else {
            addTasks(task)
            navigation.navigate('HomeScreen')
            setTask('')
        }
    }
    const handlePressComplete =(id) =>{
        getIncompleteTasks(id);
        navigation.navigate('HomeScreen');
      }
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <View style={styles.container1}>
                <IconButton
                    style={styles.Accbtn}
                    icon="account"
                    size={40}
                    onPress={handleAccount}
                />
                {
                  firstName.map((item, index) => {
                     return (
                        <View key={index} style={styles.usernameCenter}>
                           {/* <TaskView text={item.task} status={'Complete'} /> */}
                           <Text style={styles.username}>Hello {item.firstname}</Text>
                        </View>
                     )
                  })
               }
                <Searchbar
                    style={styles.searchbar}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={styles.Inlinebutton}>
                <TextInput
                    style={styles.formInput1}
                    placeholder="Write a task*"
                    autoCapitalize="none"
                    value={task}
                    onChangeText={(task) => setTask(task)}
                />
                <IconButton
                    style={styles.plusbtn}
                    icon="plus"
                    size={40}
                    onPress={handlePressTask}
                />
            </View>

            <View style={{ backgroundColor: '#F4F4F4' }}>
                {
                    taskItems.map((item, index) => {
                        return (
                            <View style={styles.rowTask} key={index}>
                                {/* <TaskView text={item.task} status={'Complete'} /> */}
                                <Text>{'\u2B24'}  {item.task}</Text>
                                <Text onPress={() => handlePressComplete(item.id)}>{item.status}</Text>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'lime',
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
     },
    searchbar: {
        borderColor: 'lime',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        elevation: 3,
        margin: 5,
    },
    formInput1: {
        borderColor: 'lime',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 3,
        width: 210,
        margin: 5,
    },
    Inlinebutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'lime',
        height: 50,
        width: 20,
        margin: 5,
        borderWidth: 2,
        borderColor: 'lime',
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'white',
        height: 50,
        width: 170,
        margin: 5,
        borderWidth: 2,
        borderColor: 'red',
    },
    textBtn: {
        color: 'red',
    },
    plusbtn: {
        borderWidth: 2,
        borderColor: 'lime',
        borderRadius: 10,
        width: 100,
    },
    Accbtn: {
        marginTop: 30,
        marginLeft: 256,
        width: 30,
        paddingTop: 0
    },
    rowTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
//make this component available to the app
export default HomeScreen;
