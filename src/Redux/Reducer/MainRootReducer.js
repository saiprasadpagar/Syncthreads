import CounterReducer from "./CounterReducer";
import UserDataReducer from "./UserDataReducer";
import { combineReducers } from "redux"; //To combile multiple Reducer We need something: so Redux will help

const rootReducer = combineReducers({
  CounterReducer,
  UserDataReducer,
});
export default rootReducer; //Go to Store & import this

//-------------------Helper---------------------------
//Add all reducer inside rootReducer
/**
 const rootReducer = combineReducers({
    CounterReducer:CounterReducer, (key:value)
    changeBackground,
    AddCounter,
}) */
