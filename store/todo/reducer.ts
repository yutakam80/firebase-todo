import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { addTodo, deleteTodo } from 'store/actions'

type TodoState = {
  todos: { id: number, body: string }[]
}

const initialState: TodoState = {
  todos: []
}

export const todoReducer = reducerWithInitialState(initialState)
.case(addTodo, (state, payload) => ({
  ...state,
  todos: state.todos.concat({ body: payload.body, id: state.todos.length })
}))
.case(deleteTodo, (state, payload) => ({
  ...state,
  todos: state.todos.filter((todo) => todo.id !== payload.id)
}))