import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import { fetchAuthSuccess } from 'store/actions'

export const useAuth = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          const unsubscribeSnapshot = firebase.firestore()
            .doc(`users/${firebase.auth().currentUser!.uid}`)
            .onSnapshot(async (doc) => {
              if (!doc.exists) {
                return
              }
              await firebase.auth().currentUser!.reload()
              dispatch(fetchAuthSuccess({
                displayName: doc.data().name,
                iconURL: doc.data().iconURL,
              }))
              Router.push('/todo')
              unsubscribeSnapshot()
            })
        } else {
          dispatch(fetchAuthSuccess({}))
          Router.push('/')
        }
      }
    )
    return () => unsubscribeAuth()
  }, [])
}
