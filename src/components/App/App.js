import React, {Fragment} from "react";
import Header from "../commons/Header/Header";
import Global from "../Global/Global";
import Constants from "../../utils/Constants";
import Scroll from "../commons/Scroll/Scroll";
import '../../styles/global.css';
import './app.css';

const App = ({children}) => (
	<Fragment>
		<Global/>
		<Header/>
		<div className="container_app">
			<Scroll point={Constants.SCROLL_POINTS.BODY}>
				<div className="main_container">
					{children}
				</div>
			</Scroll>
		</div>
	</Fragment>
);

export default App;