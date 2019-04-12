import {LOGGED_IN, LOGGED_OUT, SHOW_LOGIN, SHOW_SIGNUP, HIDE_LOGIN, HIDE_SIGNUP} from '../Constants/ActionTypes/Auth';

const initialState = {
	user:{},
	isLoggedIn:false,
	redirectToReferrer:false,
	showLogin:false,
	showSignup:false
};

const reducer = (state = initialState, action = {}) => {
	switch(action.type){
		case LOGGED_IN:
			return { ...state, user:action.user, isLoggedIn:true, redirectToReferrer:true, showSignup:false, showLogin:false};
		case LOGGED_OUT:
			return { ...state, user:{}, isLoggedIn:false, redirectToReferrer:false};
		case SHOW_SIGNUP:
			return { ...state, isLoggedIn:false, redirectToReferrer:true, showSignup:true, showLogin:false};
		case SHOW_LOGIN:
			return { ...state, isLoggedIn:false, redirectToReferrer:true, showSignup:false, showLogin:true};
		case HIDE_SIGNUP:
			return { ...state, isLoggedIn:false, redirectToReferrer:true, showSignup:false, showLogin:false};
		case HIDE_LOGIN:
			return { ...state, isLoggedIn:false, redirectToReferrer:true, showSignup:false, showLogin:false};
		default: return state;
	}
}


export default reducer;