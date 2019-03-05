import { createStore } from 'redux'
import reducer from './../reducer'

import { composeWithDevTools } from 'redux-devtools-extension'
export default () => createStore(reducer, composeWithDevTools());

// const store = createStore(reducer)
// export default store


// export default (prevState) => createStore(reducer, prevState);
