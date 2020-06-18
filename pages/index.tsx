import { NextPage } from 'next'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import { useEffect, useState, useMemo } from 'react'

const Index: NextPage = () => {
  const [initialMount, setInitialMount] = useState(false)
  const clickSignIn = () => {
    sessionStorage.setItem('pending', '1')
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  useEffect(() => {
    if (sessionStorage.getItem('pending')) {
      sessionStorage.removeItem('pending')
      Router.push('/todo')
    } else {
      setInitialMount(true)
    }
  }, [])
  return useMemo(() => {
    if (!initialMount) {
      return null
    }
    return (
      <div>
        <h1>firebase-todo</h1>
        <button onClick={clickSignIn}>
          Googleアカウントでログイン
        </button>
      </div>
    )
  }, [initialMount])
}

export default Index
