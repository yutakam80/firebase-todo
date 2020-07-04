import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { fetchAuthSuccess, doSignOut } from 'store/actions'

type UserState = {
  displayName: string
  iconURL: string
  fetched: boolean
  authed: boolean
}

const initialState: UserState = {
  displayName: '',
  iconURL: '',
  fetched: false,
  authed: false,
}

export const userReducer = reducerWithInitialState(initialState)
.case(fetchAuthSuccess, (_, payload) => ({
  displayName: payload.displayName,
  iconURL: payload.iconURL,
  fetched: true,
  authed: !!(payload.displayName && payload.iconURL),
}))
.case(doSignOut, (_) => ({
  ...initialState,
}))