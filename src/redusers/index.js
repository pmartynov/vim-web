import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import auth from "./auth";
import posts from "./posts";
import post from "./post";
import modal from "./modal";
import metaTags from "./metaTags";

export default combineReducers({
	auth,
	posts,
	post,
	modal,
	router: routerReducer,
	metaTags
});