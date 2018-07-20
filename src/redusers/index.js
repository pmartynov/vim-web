import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import auth from "./auth";
import metaTags from "./metaTags";
import scroll from "./scroll";

export default combineReducers({
	auth,
	router: routerReducer,
	metaTags,
	scroll
});