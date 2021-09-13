import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, Keyboard, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Task from './components/Task';
import { useState } from 'react';

import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBJvq5sNI3EnpW5BpuHngfPkruKloTA7Eg',
  authDomain: "todolist-mas1.firebaseapp.com",
  databaseURL: "https://todolist-mas1-default-rtdb.firebaseio.com",
  projectId: "todolist-mas1",
  storageBucket: "todolist-mas1.appspot.com",
  messagingSenderId: "678968326247",
  appId: "1:678968326247:web:b6732001415f28dfad3cc2",
  measurementId: "G-JC7X5ZXM7B"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Page Title */}
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <Text style={styles.sectionTitle}>{Date().toLocaleString()} </Text>

        <View style={styles.items}>
          {/* Where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>

      {/* Create new task */}
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder={'New Task'} value={task} onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  }, 
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  }, 
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {},
});
