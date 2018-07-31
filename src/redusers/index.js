import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import auth from "./auth";
import metaTags from "./metaTags";
import scroll from "./scroll";
import postsList from "./postsList";
import posts from "./posts";
import inputs from "./inputs";
import infoModal from './infoModal';

export default combineReducers({
	auth,
	router: routerReducer,
	metaTags,
	scroll,
	postsList,
	posts,
	inputs,
	infoModal
});