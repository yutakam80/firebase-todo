import { NextPage } from 'next'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import { useEffect } from 'react'

const Index: NextPage = () => {
  const clickSignIn = () => {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  useEffect(() => {
    firebase.auth().getRedirectResult().then((result) => {
      if (result.user) {
        Router.push('/todo')
      }
    })
  }, [])
  return (
    <div>
      <h1>firebase-todo</h1>
      <button onClick={clickSignIn}>
        Googleアカウントでログイン
      </button>
    </div>
  )
}

export default Index
