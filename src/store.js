import {applyMiddleware, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import mainReduser from './redusers/index';
import {routerMiddleware} from "react-router-redux";

const isBrowser = (typeof window !== 'undefined');

export default function configureStore(initialState = {}, history) {
	const router = routerMiddleware(history);
	let middlewares = [
		promiseMiddleware({
			promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
		}),
		thunk,
		router
	];

	if (isBrowser) {
		middlewares.push(createLogger({
			collapsed: true
		}));
	}

	return createStore(
		mainReduser,
		initialState,
		compose(
			applyMiddleware(...middlewares),
			isBrowser && window['devToolsExtension'] ? window['devToolsExtension']() : f => f
		)
	);

}