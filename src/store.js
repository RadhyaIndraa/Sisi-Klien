import { createStore } from 'redux';

const initialState = {
  student: {
    name: 'Radhya Adiyatma Indarto',
    id: 'A11.2021.13447',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STUDENT':
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
