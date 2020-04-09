import {createStore,applyMiddleWare} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import {componseWithDevTools} from 'redux-devtools-extension'
const store=createStore(reducer,componseWithDevTools(applyMiddleWare(thunk)))
export default store