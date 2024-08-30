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
const logs = (state, action) => {};
