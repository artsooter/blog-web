import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatestSaga } from './saga';

const data = (state = { text: 'default' }, action) => {
  switch (action.type) {
    case 'click': {
      console.log(action);
      return { ...state, ...action };
    }
    case 'click-saga': {
      console.log('saga');
      return { ...state, ...action };
    }

    default:
      return state;
  }
};

const saga = createSagaMiddleware(takeLatestSaga);
const reducers = combineReducers({ data });
const store = createStore(reducers, applyMiddleware(saga));
saga.run(takeLatestSaga);
export default store;
