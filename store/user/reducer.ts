import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { fetchAuthSuccess, doSignOut } from 'store/actions'

type UserState = {
  displayName: string
  email: string
  fetched: boolean
  authed: boolean
}

const initialState: UserState = {
  displayName: '',
  email: '',
  fetched: false,
  authed: false,
}

export const userReducer = reducerWithInitialState(initialState)
.case(fetchAuthSuccess, (_, payload) => ({
  displayName: payload.displayName,
  email: payload.email,
  fetched: true,
  authed: !!(payload.displayName && payload.email),
}))
.case(doSignOut, (_) => ({
  ...initialState,
}))