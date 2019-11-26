import * as actionTypes from "./actions";

const initialState = {
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALIDATE:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
};

export default reducer;
