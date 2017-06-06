import React from 'react';
import Home from 'bundle-loader?lazy&name=[name]!./Home';
import User from 'bundle-loader?lazy&name=[name]!./User';
import {Route,Link} from 'react-router-dom';
import Bundle from './Bundle';

const App=()=>(
	<div style={{backgroundColor:"#ff6623"}}>
		<h2>按需加载</h2>
		<Link to="home" >home</Link> | <Link to="user" >user</Link>
		<Route path="/home" component={Bundle(Home)} />
		<Route path="/user" component={Bundle(User)} />
	</div>
)
export default App;