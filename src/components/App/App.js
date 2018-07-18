import React from "react";
import Header from "../Header/Header";
import Global from "../Global/Global";
import './app.css';
import '../../styles/global.css';
import {Scrollbars} from "react-custom-scrollbars";

const App = ({children}) => (
	<div className="main_app">
		<Global/>
		<Header/>
		<div className="container_app">
			<Scrollbars>
				<div className="body_app">
					{children}
				</div>
			</Scrollbars>
		</div>
	</div>
);

export default App;