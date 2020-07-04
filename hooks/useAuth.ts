import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import { fetchAuthSuccess } from 'store/actions'

export const useAuth = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          dispatch(fetchAuthSuccess({
            displayName: user.displayName,
            iconURL: user.photoURL,
          }))
          Router.push('/todo')
        } else {
          dispatch(fetchAuthSuccess({}))
          Router.push('/')
        }
      }
    )
    return () => unsubscribe()
  }, [])
}
