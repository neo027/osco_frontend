import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import storeFactory from './storeFactory';
import {Provider} from 'react-redux';

import App from './App';

import * as serviceWorker from './serviceWorker';

import {getToken, removeToken} from './Utilities';
import {userLoggedIn} from './Actions/Auth';
import {fetchMe} from './Api/Auth';

import './index.css';


const store = storeFactory();
const token = getToken();

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>, document.getElementById('root'));
}


if(token){
	fetchMe(token)
	.then(data => store.dispatch(userLoggedIn(data.user)))
	.catch(error => removeToken())
	.then(() => renderApp());
}
else {
	renderApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
