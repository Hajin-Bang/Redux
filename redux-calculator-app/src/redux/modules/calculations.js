// Action Value
const CAL_PI = "CAL_PI";
const CAL_POW_10 = "CAL_POW_10";
const CAL_SQUARE = "CAL_SQUARE";

// Action Creator
export const calPi = (payload) => {
  return {
    type: CAL_PI,
    payload,
  };
};

export const calPow10 = (payload) => {
  return {
    type: CAL_POW_10,
    payload,
  };
};
export const calSquare = (payload) => {
  return {
    type: CAL_SQUARE,
    payload,
  };
};

// state init
const initialState = [
  {
    id: 1,
    operation: "pi",
    input: 3,
    result: 9.42477796077,
  },
  {
    id: 2,
    operation: "pow_10",
    input: 4,
    result: 10000,
  },
  {
    id: 3,
    operation: "square",
    input: 5,
    result: 25,
  },
];

// Reducer
const calculations = (state = initialState, action) => {
  switch (action.type) {
    case CAL_PI:
      return [
        ...state,
        {
          ...action.payload,
          result: Math.PI * action.payload.input,
        },
      ];
    case CAL_POW_10:
      return [
        ...state,
        {
          ...action.payload,
          result: Math.pow(10, action.payload.input),
        },
      ];
    case CAL_SQUARE:
      return [
        ...state,
        {
          ...action.payload,
          result: action.payload.input * action.payload.input,
        },
      ];

    default:
      return state;
  }
};

export default calculations;
