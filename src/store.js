import {applyMiddleware, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import mainReduser from './redusers/index';
import {routerMiddleware} from "react-router-redux";
import AppUtils from "./utils/AppUtils";

let store;

export function getStore(initialState = {}, history) {
	return store || configureStore(initialState, history);
}

function configureStore(initialState, history) {
	const router = routerMiddleware(history);
	let middlewares = [
		promiseMiddleware({
			promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
		}),
		thunk,
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

	return store;
}