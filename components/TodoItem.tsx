import styles from 'components/TodoItem.module.scss'
import { useDispatch } from 'react-redux'
import { deleteTodo } from 'store/actions'

type Props = {
  id: number
  body: string
}

export const TodoItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const handleClickDelete = () => {
    dispatch(deleteTodo({ id: props.id }))
  }
  return (
    <li className={styles.wrapper}>
      <p>{props.body}</p>
      <p>
        <button onClick={handleClickDelete}>Del</button>
      </p>
    </li>
  )
}