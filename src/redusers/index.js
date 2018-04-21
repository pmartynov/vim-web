import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import auth from "./auth";
import posts from "./posts";
import post from "./post";

export default combineReducers({
	auth,
	posts,
	post,
	router: routerReducer
});