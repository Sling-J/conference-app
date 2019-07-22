import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from "connected-react-router";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import history from '../history';
import reducer from "./reducer";

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);
const store = createStore(reducer(history), enhancer);

window.store = store;

export default store;