import React, {Fragment} from "react";
import Header from "../commons/Header/Header";
import Global from "../Global/Global";
import Scroll from "../commons/Scroll/Scroll";
import Constants from "../../utils/Constants";
import '../../styles/global.css';
import './app.css';

const App = ({children}) => (
	<Fragment>
		<Global/>
		<Header/>
		<div className="container_app">
			<Scroll point={Constants.SCROLL_POINTS.BODY} className="main_container" deltaForFetch={1000}>
					{children}
			</Scroll>
		</div>
	</Fragment>
);

export default App;