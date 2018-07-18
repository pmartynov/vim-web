import React from "react";
import Header from "../Header/Header";
import Global from "../Global/Global";
import './app.css';
import '../../styles/global.css';

const App = ({children}) => (
	<div className="main_app">
		<Global/>
		<Header/>
		<div className="body_app">
			{children}
		</div>
	</div>
);

export default App;