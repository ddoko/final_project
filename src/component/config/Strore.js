import {createStore, combineReducers,applyMiddleware} from 'redux'
import mutasi from '../reducer/Mutasi'
import lokasi from '../reducer/Lokasi'
import app from '../reducer/App'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    mutasi,
    lokasi,
    app,
  })
  
  const middlewares = applyMiddleware(
    thunk,
  )
  
  export default createStore(reducers, middlewares)