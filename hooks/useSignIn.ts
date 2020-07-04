import { useCallback, useEffect, useState } from 'react'
import Router from 'next/router'
import firebase from 'services/firebase'

export const useSignIn = () => {
  const [initialized, setInitialized] = useState(false)
  const signIn = useCallback(() => {
    sessionStorage.setItem('pending', '1')
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('pending')) {
      sessionStorage.removeItem('pending')
      Router.push('/todo')
    } else {
      setInitialized(true)
    }
  }, [])

  return { signIn, initialized }
}