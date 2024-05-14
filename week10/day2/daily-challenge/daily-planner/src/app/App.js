import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Tasks from '../components/Tasks';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Daily Planner</h1>
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
