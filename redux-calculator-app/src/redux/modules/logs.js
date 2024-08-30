// Action Value
const DELETE_LOG = "DELETE_LOG";

// Action Creator
export const deleteLog = (payload) => {
  return {
    type: DELETE_LOG,
    payload,
  };
};

// state init
const initialState = [];

// Reducer
const logs = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_LOG:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default logs;
