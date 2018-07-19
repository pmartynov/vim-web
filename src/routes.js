import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login/Login";
import App from "./components/App/App";
import Index from "./components/Index/Index";
import PrivateRoute from "./components/commons/PriveteRoute/PrivateRoute";
import IndexS from "./serversComponents/IndexS";
import LoginS from "./serversComponents/LoginS";

export function getRoutes() {
	return (
		<App>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/index"/>}/>
				<Route path="/login" component={Login}/>
				<PrivateRoute path="/index" component={Index}/>
				<Route path="*" component={NotFound}/>
			</Switch>
		</App>
	)
}

export function getServerRouter() {
	return (
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/index"/>}/>
			<Route path="/login" component={LoginS}/>
			<PrivateRoute path="/index" component={IndexS}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	)
}