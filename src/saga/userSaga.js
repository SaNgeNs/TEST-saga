import { takeEvery, put, call, take, all } from 'redux-saga/effects';

import {
  CREATE_USER,
  LOAD_CREATED_USER,
  LOAD_LOG_IN_USER,
  AUTHORIZE_USER,
} from 'Types';

const putUserData = (id) => ({
  type: CREATE_USER,
  payload: id,
});

const putAuthorizeUser = ({ token, id }) => ({
  type: AUTHORIZE_USER,
  payload: {
    token,
    id,
  },
});

const FetchCreatUser = (data) => (
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
);

const FetchAuthorizeUser = (data) => (
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
);

function* workerCreateUser() {
  const { data } = take(LOAD_CREATED_USER);
  yield call(FetchCreatUser, data);

  yield put(putUserData(Math.ceil(Math.random() * 10000)));
}

function* workerAuthorizeUser() {
  const { data } = take(LOAD_LOG_IN_USER);
  yield call(FetchAuthorizeUser, data);

  yield put(putAuthorizeUser({
    id: Math.ceil(Math.random() * 10000),
    token: new Date().getTime(),
  }));
}

export function* watchUserSaga() {
  yield all([
    takeEvery(LOAD_CREATED_USER, workerCreateUser),
    takeEvery(LOAD_LOG_IN_USER, workerAuthorizeUser),
  ]);
}
