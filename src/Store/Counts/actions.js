import { SET_COUNT, ADD_COUNT, ADD_INPUT_COUNT, DELETE_COUNT, DELETE_INPUT_COUNT } from './constants';

export const setCount = (data) => {
  return {
    type: SET_COUNT,
    data,
  };
};
export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    data,
  };
};
export const addInputCount = (data) => {
  return {
    type: ADD_INPUT_COUNT,
    data,
  };
};
export const deleteCount = (data) => {
  return {
    type: DELETE_COUNT,
    data,
  };
};
export const deleteInputCount = (data) => {
  return {
    type: DELETE_INPUT_COUNT,
    data,
  };
};
