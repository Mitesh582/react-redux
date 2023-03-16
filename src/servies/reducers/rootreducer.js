import { combineReducers } from "redux";
import incdsc from "./counter.reducer";
import userReducer from "./User.reducer"

const rootReducer = combineReducers({
    incdsc,userReducer
})

export default rootReducer;