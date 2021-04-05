import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {mainPageReducer} from "./main-page-reducer";
import thunkMiddleware from "redux-thunk";
import {translateGameReducer} from "./translate-game-reducer";

let rootReducer = combineReducers({
    // state property and handling reducer
    mainPageReducer : mainPageReducer,
    translateGameReducer : translateGameReducer
});

// applyMiddleware() add new logic layer
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; --- [integration with chrome extension]
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store