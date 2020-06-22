import { useCallback } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { doSignOut } from 'store/actions'
import { useDispatch } from 'react-redux'

export const useSignOut = () => {
  const dispatch = useDispatch()
  const signOut = useCallback(async () => {
    try {
      await firebase.auth().signOut()
      dispatch(doSignOut())
    } catch(e) {
      console.log(e)
    }
  }, [])
  return { signOut }
}