// const [data, setData] = useState(0)
const initialState = 0; //we can take useSate() here

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default CounterReducer;
