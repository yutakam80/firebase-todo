import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { userReducer } from 'store/user/reducer'
import { todoReducer } from 'store/todo/reducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export type RootState = ReturnType<typeof rootReducer>

const initStore = () => {
  return createStore(reducer, bindMiddleware([]))
}

export const wrapper = createWrapper<RootState>(initStore)