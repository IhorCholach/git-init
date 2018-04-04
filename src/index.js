import React from 'react';
import { render } from 'react-dom';
/*import './index.css';*/
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers'

/*import './containers/style.css';*/



/*import Header from './components/header';

import Chef from './components/aboutChef'

import MyLogin from './components/MyLoginForm'

import CardMeal from './components/mealCard'
import OrderForm from './components/orderform'
import Login from './components/loginForm'
import Sign from './components/signupCom'
import Main from './components/main';
import Footer from './components/footer';*/

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





render(
	<Provider store={store} >
		<Router > 
			<App />
		</Router>
	</Provider>	,
 		document.getElementById('root'));
registerServiceWorker();