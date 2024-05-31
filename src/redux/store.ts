import { createStore, combineReducers, applyMiddleware } from 'redux';
import { booksReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { watcherBooks } from './actionCreators';

export default createStore(
    combineReducers({
      books: booksReducer,
    }),
  );

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
    yield all([
        watcherBooks(),
      ])
  }
  
const store = createStore(
    combineReducers({
        books: booksReducer,
    }), {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)  

export { store }