import React from "react";
import {Provider} from "react-redux";
import {WrapperProvider} from "create-react-server/wrapper";
import createStore from "./store";
import createMemoryHistory from "history/createMemoryHistory";
import createBrowserHistory from "history/createBrowserHistory";
import {ConnectedRouter} from "react-router-redux";
import {getRoutes} from "./routes";

let store;

export function getStore() {
	return store;
}

export default ({state, props, req}) => {

	let history = (typeof window !== 'undefined') ? createBrowserHistory() : createMemoryHistory();

	store = createStore(state, history);

	if (typeof window !== 'undefined') {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<WrapperProvider initialProps={props}>
						{getRoutes()}
					</WrapperProvider>
				</ConnectedRouter>
			</Provider>
		)
	}

	return (
		<Provider store={store}>
			<WrapperProvider initialProps={props}>
				{getRoutes()}
			</WrapperProvider>
		</Provider>
	)
};
