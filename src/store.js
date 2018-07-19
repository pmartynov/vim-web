import {applyMiddleware, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import mainReduser from './redusers/index';
import {routerMiddleware} from "react-router-redux";
import AppUtils from "./utils/AppUtils";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";

let store;

export function getStore(initialState = {}, history) {
	return store || configureStore(initialState, history);
}

function configureStore(initialState, history) {
	const router = routerMiddleware(history);
	const sagaMiddleware = createSagaMiddleware();

	let middlewares = [
		promiseMiddleware({
			promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
		}),
		thunk,
		sagaMiddleware,
		router
	];

	if (AppUtils.isBrowser) {
		middlewares.push(createLogger({
			collapsed: true
		}));
	}
	store = createStore(
		mainReduser,
		initialState,
		compose(
			applyMiddleware(...middlewares),
			AppUtils.isBrowser && window['devToolsExtension'] ? window['devToolsExtension']() : f => f
		)
	);

	sagaMiddleware.run(rootSaga);
	return store;
}