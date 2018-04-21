import "es6-promise/auto";
import "isomorphic-fetch";
import React from "react";
import {render} from "react-dom";
import createApp from "./app";

const Root = () => (
	createApp({state: window['__INITIAL__STATE__'], props: window['__INITIAL__PROPS__']})
);

render((<Root/>), document.getElementById('root'));

if (module.hot) module.hot.accept();

