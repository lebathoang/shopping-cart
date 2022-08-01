import { SET_COUNT, ADD_COUNT, ADD_INPUT_COUNT, DELETE_COUNT, DELETE_INPUT_COUNT } from './constants';

export const initState = {
  count: 0,
  str_count: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        count: state.count,
        str_count: action.data,
      };
    case ADD_COUNT:
      return {
        count: state.count + 1,
        ...state.str_count,
      };
    case ADD_INPUT_COUNT:
      return {
        count: state.count + Number(action.data),
        ...state.str_count,
      };
    case DELETE_COUNT:
      return {
        count: state.count - 1,
        ...state.str_count,
      };
    case DELETE_INPUT_COUNT:
      return {
        count: state.count - Number(action.data),
        ...state.str_count,
      };
    default:
      break;
  }
};

export default reducer;
