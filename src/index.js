import store from './components/State/State';
/* import reportWebVitals from './reportWebVitals'; */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let rerenderTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>, document.getElementById('root')
	);
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);