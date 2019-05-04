import { combineReducers } from "redux";
import todosReducers from "./TodoReducers";

const rootReducer = combineReducers({
  todosReducers
});

export default rootReducer;
