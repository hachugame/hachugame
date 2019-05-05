import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import hachu from './images/hachu.png';
import './App.css';
import ReduxThunk from 'redux-thunk';
import HachuApp from './reducers/index.js';

const store = createStore(
	HachuApp,
	applyMiddleware(ReduxThunk)
);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={hachu} className="App-logo" alt="hachu" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
