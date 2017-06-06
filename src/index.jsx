import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

//import 'babel-polyfill';
ReactDOM.render(
	<Router>
		<App />
	</Router>
	,document.getElementById('root'))