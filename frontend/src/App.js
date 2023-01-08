import logo from './logo.svg';
import './App.css';
import { v, test } from './Api';
import React from 'react';
import Header from './Header';
import { useState } from 'react';
import LanguageFamiliarityInput from './LanguageFamiliarity';
import DurationInput from './Duration';
import ThemeInput from './Theme';

function App() {
  const[languageFamiliarity, setLanguageFamiliarity] = useState('');
  const[duration, setDuration] = useState('');
  const[theme, setTheme] = useState('');

  const childToParent1 = (event) => {
    setLanguageFamiliarity(event);
    console.log(languageFamiliarity);
  }

  const childToParent2 = (event) => {
    setDuration(event);
    console.log(duration);
  }

  const childToParent3 = (event) => {
    setTheme(event);
    console.log(theme);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>

        <p>
        {this.state.response}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Header/>
      </header>
      <div className="Lang-familiarity">
      <LanguageFamiliarityInput childToParent={childToParent1}/>
      </div>
      <div className="Duration">
      <DurationInput childToParent={childToParent2}/>
      </div>
      <div className="Theme">
      <ThemeInput childToParent={childToParent3}/>
      </div>
    </div>
  );
  }



export default App;
