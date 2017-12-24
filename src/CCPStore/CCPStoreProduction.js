import { createStore } from 'redux'
import rootReducer from '../CCPReducers'

export default function CCPStore(initialState) {
  return createStore(rootReducer, initialState)
}
