import { NextPage } from 'next'
import firebase from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import { useMemo } from 'react'
import { useAuth } from 'hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { doSignOut } from 'store/actions'
import { RootState } from 'store'

const Todo: NextPage = () => {
  useAuth()
  const { authed } = useSelector((state: RootState) => ({
    authed: state.user.authed,
  }))
  const dispatch = useDispatch()
  const clickSignOut = async () => {
    try {
      await firebase.auth().signOut()
      dispatch(doSignOut())
      Router.push('/')
    } catch(e) {
      console.log(e)
    }
  }
  return useMemo(() => {
    if (!authed) {
      return null
    }
    return (
      <div>
        <h1>todo</h1>
        <button onClick={clickSignOut}>
          Logout
        </button>
      </div>
    )
  }, [authed])
}

export default Todo
