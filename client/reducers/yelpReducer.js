import * as types from '../constants/ActionTypes';

export default (state = {
  result: []
}, action) => {
  switch (action.type) {
    case types.YELP_SUCCESS:
    return {
      ...state,
      result: action.payload
    };
    case types.YELP_FAILURE:
    return{
      ...state,
      result: action.err
    };
    default:
    return state;
  }
}
