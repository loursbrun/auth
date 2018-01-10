import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyCNF2TN-o_s1RiVs8JVm7SX3Y7vp0sws30',
    authDomain: 'authentification-9b9ed.firebaseapp.com',
    databaseURL: 'https://authentification-9b9ed.firebaseio.com',
    projectId: 'authentification-9b9ed',
    storageBucket: 'authentification-9b9ed.appspot.com',
    messagingSenderId: '382145171081'
  }
);
}

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  }
}

export default App;


