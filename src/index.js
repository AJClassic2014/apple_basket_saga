import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './redux/reducers/appleBasketReducer.js';
import AppleBasket from './redux/components/AppleBasket.jsx';
import './assets/styles/style_compressed.css';
import rootSaga from './redux/sagas/index.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

const renderApp = () => {
   ReactDOM.render(<Provider store={store}>
   <AppleBasket />
   </Provider>,
   document.getElementById('app'));
 };

renderApp();