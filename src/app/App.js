import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import store from '../store/'
import { View as CommonWrapper } from '../components/CommonWrapper/'
import { View as Home } from '../pages/Home/'
import { View as Detail } from '../pages/Detail/'

import 'whatwg-fetch'
import './reset.css'
import './style.css'
import 'antd/dist/antd.css'

export default class App extends Component {
	render() {
		return (
			<div className='main'>
				<Provider store={store}>
					<Router history={browserHistory}>
						<Route path='/' component={CommonWrapper}>
							<IndexRoute component={Home}></IndexRoute>
							<Route path='detail/:id' component={Detail}></Route></Route></Router></Provider></div>)}}