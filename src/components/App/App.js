import React, {Fragment} from "react";
import Header from "../Header/Header";
import Global from "../Global/Global";
import './app.css';
import '../../styles/global.css';
import {Scrollbars} from "react-custom-scrollbars";

const App = ({children}) => (
	<Fragment>
		<Global/>
		<Header/>
		<div className="container_app">
			<Scrollbars>
				<div className="main_container">
					{children}
				</div>
			</Scrollbars>
		</div>
	</Fragment>
);

export default App;