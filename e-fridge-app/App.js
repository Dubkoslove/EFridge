import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth, db } from './firebaseConfig'; // We import the initialized auth and db objects
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import React from 'react';

// 1. Configure Google Sign-In
// You need to get this from your google-services.json file (for android)
// or from the Firebase console's web app configuration.
GoogleSignin.configure({
  webClientId: '974831085039-ps03cbq2e6bi6kkkaecn22es31s4mamc.apps.googleusercontent.com', 
});

export default function App() {

  // 2. Create the sign-in function
  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      console.log("Got ID Token: ", idToken);

      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await signInWithCredential(auth, googleCredential); // <-- Here we use the 'auth' object
      const user = userCredential.user;
      console.log('Signed in with Google!', user.displayName);

      // 3. Check if user is new and create a database entry
      const userDocRef = doc(db, 'users', user.uid); // <-- Here we use the 'db' object
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // New user - create a document in Firestore
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date(),
        });
        console.log('New user profile created in Firestore!');
      }
      
      // You can now navigate to the main part of your app
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to E-Fridge!</Text>
      <Text>Please sign in to continue.</Text>
      <StatusBar style="auto" />
      <Button
        title="Sign in with Google"
        onPress={onGoogleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
