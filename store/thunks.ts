import firebase from 'firebase/app'
import 'firebase/auth'
import { signOutSuccess } from 'store/actions'

export const doSignIn = () => {
  return (dispatch) => {
    sessionStorage.setItem('pending', '1')
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}

export const doSignOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(signOutSuccess())
  }
}