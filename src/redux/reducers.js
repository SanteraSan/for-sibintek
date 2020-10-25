import jobReducer from "./reducers/jobReducer";
import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
    jobReducer,
    form: formReducer
})

let store = createStore(reducers)

window.store = store;

export default store