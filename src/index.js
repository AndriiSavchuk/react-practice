const css = require('./style.sass');

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';


const API_KEY = 'AIzaSyDcH-ShTwqK9h5z9Abz8VA9Zkn56oMlSt0';

const App = () => {
  return ( <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
