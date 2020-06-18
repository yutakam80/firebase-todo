import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const fetchAuthSuccess = actionCreator<{ displayName?: string, email?: string }>('FETCH_AUTH_SUCCESS')
export const doSignOut = actionCreator('DO_SIGN_OUT')