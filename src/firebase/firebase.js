import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBphcrJsDrY63W7uJG-5WRvn7lqOuUE0_0",
    authDomain: "todoapp420.firebaseapp.com",
    databaseURL: "https://todoapp420.firebaseio.com",
    projectId: "todoapp420",
    storageBucket: "todoapp420.appspot.com",
    messagingSenderId: "617577486762",
    appId: "1:617577486762:web:db4436af853fc1041d73d3"
  };

firebase.initializeApp(firebaseConfig)

export const createUserProfile = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      }); 
    } catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef

}




export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase