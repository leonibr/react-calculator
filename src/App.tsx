import React, { Fragment } from 'react';

import './App.scss';
import Calculator from './Calculator';

function App() {
  return (
    <Fragment>
      <div className="app-header">
        <label>React Calculator</label>

      </div>
      <div className="app-container">       
      <p></p>
      <p>Simple Calculator program to learn react using typescript.</p>
      
        <Calculator></Calculator>
        Source code available on Github
      </div>
    </Fragment>
  );
}

export default App;
