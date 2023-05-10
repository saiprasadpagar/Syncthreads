//import { createStore } from "redux";  // Deprecated
import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./Redux/Reducer/MainRootReducer"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store; //go to index.js & import store And wrap it using <Provider>








//--------------------Note:----------------------
//reduxDevtool extention link: https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
//createStore is deprecated
//for learning purpose you can use Redux package But 

//You should not be using the redux core package by itself today, except for learning purposes.
//The createStore method from the core redux package will not be removed, 
//but we encourage all users to migrate to using Redux Toolkit for all Redux code.

//insted of createStore use import { legacy_createStore as createStore} from 'redux'
