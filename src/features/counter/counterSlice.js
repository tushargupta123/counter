const initialState = {
  counters: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        ...state,
        counters: [...state.counters, action.payload],
      };
    case "REMOVE_COUNTER":
      return {
        ...state,
        counters: state.counters.filter(
          (counter) => counter.id !== action.payload
        ),
      };
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.value + 1 }
            : counter
        ),
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.value - 1 }
            : counter
        ),
      };
    case "RESET_COUNTER":
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.startValue }
            : counter
        ),
      };
    case "SET_START_VALUE":
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.id
            ? { ...counter, startValue: action.payload.startValue }
            : counter
        ),
      };
    case "UPDATE_START_VALUE":
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload.id) {
            return {
              ...counter,
              startValue: action.payload.startValue,
              value: action.payload.startValue,
            };
          }
          return counter;
        }),
      };
    default:
      return state;
  }
};

export default counterReducer;
