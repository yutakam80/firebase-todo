import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const fetchAuthSuccess = actionCreator<{ displayName?: string, iconURL?: string }>('FETCH_AUTH_SUCCESS')
export const doSignOut = actionCreator('DO_SIGN_OUT')

export const addTodo = actionCreator<{ body: string }>('ADD_TODO')
export const deleteTodo = actionCreator<{ id: number }>('DELETE_TODO')