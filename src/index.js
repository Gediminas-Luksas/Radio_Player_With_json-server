import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducer from './reducers';

const store = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={store(reducer)}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
