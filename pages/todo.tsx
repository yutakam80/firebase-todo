import { NextPage } from 'next'
import { useMemo } from 'react'
import { useAuth } from 'hooks/useAuth'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { TodoForm } from 'components/TodoForm'
import { TodoList } from 'components/TodoList'
import { useSignOut } from 'hooks/useSignOut'

const Todo: NextPage = () => {
  useAuth()
  const { signOut } = useSignOut()
  const { authed } = useSelector((state: RootState) => ({
    authed: state.user.authed,
  }))
  const clickSignOut = async () => {
    signOut()
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
