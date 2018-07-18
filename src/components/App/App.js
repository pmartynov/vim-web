import React from "react";
import Header from "../Header/Header";
import Global from "../Global/Global";
import './app.css';

const App = ({children}) => (
	<div className="main_app">
		<Header/>
		<div className="body_app">
			{children}
		</div>
		<Global/>
	</div>
);

export default App;