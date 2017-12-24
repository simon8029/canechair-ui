import { createStore, compose } from 'redux'

import rootReducer from '../CCPReducers'

function getSessionKey() {
  const matches = window.location.href.match(/[?&]debug=([^&#]+)\b/)
  return (matches && matches.length > 0)
    ? matches[1]
    : null
}

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default function CCPStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  // if (module.hot) {
  //   module.hot.accept('../CCPReducers/index', () => store.replaceReducer(require('../CCPReducers/index').default))
  // }

  return store;
}
