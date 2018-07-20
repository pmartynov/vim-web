import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import auth from "./auth";
import metaTags from "./metaTags";
import scroll from "./scroll";
import postsList from "./postsList";
import posts from "./posts";
import image from "./image";

export default combineReducers({
	auth,
	router: routerReducer,
	metaTags,
	scroll,
	postsList,
	posts,
	image
});