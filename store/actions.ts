import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const fetchAuthSuccess = actionCreator<{ displayName?: string, email?: string }>('FETCH_AUTH_SUCCESS')
export const signOutSuccess = actionCreator('SIGN_OUT_SUCCESS')

export const addTodo = actionCreator<{ body: string }>('ADD_TODO')
export const deleteTodo = actionCreator<{ id: number }>('DELETE_TODO')