import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, Task } from './pages';
import { Provider } from 'react-redux';
import { storeConfig } from "./stores/storeConfig";
import { Dropdown } from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-3xl font-bold underline"> Redux App </div>
        <Provider store={storeConfig}>
          <Counter />
          <Task />
        </Provider>
        <Dropdown />
      </header>
    </div>
  );
}

export default App;
