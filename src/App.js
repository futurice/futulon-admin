import React, { Component } from 'react';
import firebase from 'firebase';
import { FirebaseAuth } from 'react-firebaseui';

import Messages from './components/Messages';
import Form from './components/Form';

import './App.css';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_KEY,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

class App extends Component {
  state = {
    signedIn: false, // Local signed-in state.
  };
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: d => {
        console.log(d);
        this.setState({ signedIn: true });
        return false; // Avoid redirects after sign-in.
      },
    },
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img className="App-logo" src="http://futupolis.com/assets/robot.png" /> */}
          <h1 className="App-title">Futulon Admin</h1>
        </header>

        <div className="App-content">
          <Form />
          <br />
          <br />
          <br />
          <br />
          <Messages />
        </div>
      </div>
    );
  }
}

export default App;
