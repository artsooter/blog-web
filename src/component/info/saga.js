import { put, takeLatest } from 'redux-saga/effects';

export function* saga() {
  try {
    const url = 'http://localhost:3000/';

    fetch(url).then((response) => {
      console.log(response);
      return response.json();
    });
    yield put({ type: 'click-saga' });
  } catch (e) {
    console.log('error==>', e);
  }
}
export function* takeLatestSaga() {
  yield takeLatest('click', saga);
}
