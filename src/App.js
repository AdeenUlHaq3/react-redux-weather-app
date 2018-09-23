import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppState from './AppState';
const store = createStore(AppState);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <SearchBar />
        </div>
      </Provider>
    );
  }
}

export default App;
