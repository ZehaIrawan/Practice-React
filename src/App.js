import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import ConfigureStore from './store/store';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
