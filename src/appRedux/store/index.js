import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers";

const createBrowserHistory = require("history").createBrowserHistory;

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [routeMiddleware];

export default function configureStore(preloadedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,

        composeEnhancers(applyMiddleware(routerMiddleware(history), ...middlewares))
    );

    return store;
}
