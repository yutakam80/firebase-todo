import { NextPage } from 'next'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useMemo } from 'react'
import { useAuth } from 'hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { doSignOut } from 'store/actions'
import { RootState } from 'store'
import { TodoForm } from 'components/TodoForm'
import { TodoList } from 'components/TodoList'

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
    } catch(e) {
      console.log(e)
    }
  }
  return useMemo(() => {
    if (!authed) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <TodoForm />
        <TodoList />
        <button onClick={clickSignOut}>
          Logout
        </button>
      </div>
    )
  }, [authed])
}

export default Todo
