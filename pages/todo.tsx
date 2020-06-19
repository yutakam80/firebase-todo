import { NextPage } from 'next'
import { useMemo } from 'react'
import { useAuth } from 'hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { TodoForm } from 'components/TodoForm'
import { TodoList } from 'components/TodoList'
import { doSignOut } from 'store/thunks'

const Todo: NextPage = () => {
  useAuth()
  const { authed } = useSelector((state: RootState) => ({
    authed: state.user.authed,
  }))
  const dispatch = useDispatch()
  const clickSignOut = async () => {
    dispatch(doSignOut())
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
