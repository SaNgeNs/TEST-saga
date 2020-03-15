import reducers from 'Reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { watchUserSaga } from 'Saga/userSaga';

const store = () => {
  const devtools = '__REDUX_DEVTOOLS_EXTENSION__';

  const sagaMiddleware = createSagaMiddleware();

  const store = !window[devtools] ? createStore(reducers, applyMiddleware(logger, sagaMiddleware)) : createStore(reducers, compose(
    applyMiddleware(logger, sagaMiddleware),
    window[devtools](),
  ));

  sagaMiddleware.run(watchUserSaga);

  return store;
};

export default store();