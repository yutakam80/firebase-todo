import styles from 'components/TodoForm.module.scss'
import { useDispatch } from 'react-redux'
import { addTodo } from 'store/actions'
import { useState, ChangeEvent, useRef, FormEvent } from 'react'

export const TodoForm = () => {
  const [body, setBody] = useState('')
  const inputRef = useRef<HTMLInputElement>()
  const dispach = useDispatch()
  const handleChangeInputBody = (event: ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value)
  }
  const handleSubtmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispach(addTodo({ body }))
    setBody('')
    inputRef.current.value = ''
  }
  return (
    <form className={styles.wrapper} onSubmit={handleSubtmit}>
      <p><input type="text" onChange={handleChangeInputBody} ref={inputRef} autoFocus /></p>
      <p><input type="submit" value="Add" /></p>
    </form>
  )
}