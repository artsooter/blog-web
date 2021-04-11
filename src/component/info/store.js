import { combineReducers, createStore } from 'redux';

const data = (state = { text: 'default' }, action) => {
  switch (action.type) {
    case 'click': {
      console.log(action);
      return { ...state, ...action };
    }

    default:
      return state;
  }
};

const store = combineReducers({ data });

export default createStore(store);
