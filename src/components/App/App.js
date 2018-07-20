import React, {Fragment} from "react";
import Header from "../commons/Header/Header";
import Global from "../Global/Global";
import '../../styles/global.css';
import './app.css';

const App = ({children}) => (
	<Fragment>
		<Global/>
		<Header/>
		<div className="container_app">
			<div className="main_container">
				{children}
			</div>
		</div>
	</Fragment>
);

export default App;