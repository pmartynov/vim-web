import React from "react";
import {Provider} from "react-redux";
import {WrapperProvider} from "create-react-server/wrapper";
import createMemoryHistory from "history/createMemoryHistory";
import createBrowserHistory from "history/createBrowserHistory";
import {ConnectedRouter} from "react-router-redux";
import {getRoutes, getServerRouter} from "./routes";
import {getStore} from "./store";
import AppUtils from "./utils/AppUtils";

export default ({state, props}) => {

	let history = (AppUtils.isBrowser) ? createBrowserHistory() : createMemoryHistory();

	const store = getStore(state, history);

	if (AppUtils.isBrowser) {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					{getRoutes()}
				</ConnectedRouter>
			</Provider>
		)
	}

	return (
		<Provider store={store}>
			<WrapperProvider initialProps={props}>
				{getServerRouter()}
			</WrapperProvider>
		</Provider>
	)
};
