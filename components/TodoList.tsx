import styles from 'components/TodoList.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { TodoItem } from 'components/TodoItem'

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => ({
    todos: state.todo.todos,
  }))
  return (
    <ul className={styles.wrapper}>
      {todos.map((todo) => (
        <TodoItem id={todo.id} body={todo.body} />
      ))}
    </ul>
  )
}