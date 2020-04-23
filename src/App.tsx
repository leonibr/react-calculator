import React, { Fragment } from 'react';

import './App.scss';
import Calculator from './Calculator';
import { GitLogo } from './GitLogo';

function App() {
  return (
    <Fragment>
      <div className="app-header">
        <label>React Calculator</label>
        
        <label>
        <a href="https://github.com/leonibr/react-calculator" target="_blank">
          <GitLogo size={18}/> Source Code</a></label>
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
