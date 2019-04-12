import {SHOW_LOGIN, HIDE_LOGIN, LOGGED_IN, LOGGED_OUT, SHOW_SIGNUP, HIDE_SIGNUP} from '../Constants/ActionTypes/Auth';

export const openLoginModal = () => ({ type:SHOW_LOGIN })
export const closeLoginModal = () => ({ type:HIDE_LOGIN })

export const openSignupModal = () => ({ type:SHOW_SIGNUP })
export const closeSignupModal = () => ({ type:HIDE_SIGNUP })

export const userLoggedIn = (user) => ({ type:LOGGED_IN, user })
export const userLoggedOut = () => ({ type:LOGGED_OUT })