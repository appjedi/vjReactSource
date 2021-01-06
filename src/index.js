
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/demo/demo.css';

import LandingPage from './views/Home.jsx';

import ContactUs from './views/ContactUs.jsx';


ReactDOM.render(
	<BrowserRouter>
		<div>
		<Switch>
			<Route
				path='/home'
				render={(props) => <LandingPage {...props} />}
			/>
			
			<Route
				path='/about-me'
				render={(props) => <LandingPage {...props} />}
			/>
	
			<Route
				path='/contact-me'
				render={(props) => <ContactUs {...props} />}
			/>
			
	

			<Redirect from='/' to='/home' />
		</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
