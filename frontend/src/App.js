import logo from './logo.svg';
import * as React from 'react';
import './App.css';

import { v, test } from './Api';
import Header from './Header';
import Num_members from './NumberOfUsers';
import Experience from './Experience';
import NumberOfIdeas from './NumberOfIdeas';
import {GeneratePrompt} from './helper/GeneratePrompt';
import { useState } from 'react';
import LanguageFamiliarityInput from './LanguageFamiliarity';
import DurationInput from './Duration';
import ThemeInput from './Theme';
import Button from '@mui/material/Button';

function App() {
  const [experience, setExperience] = React.useState('');
  const [numIdeas, setnumIdeas] = React.useState('');
  const [numUsers, setnumUsers] = React.useState('');

  const childToParent = (event) => {
    setExperience(event);
    
    console.log(experience);
    };
  const childToParent2 = (event) => {
    setnumIdeas(event);
    console.log(numIdeas);
  };

  const childToParent3 = (event) => {
    setnumUsers(event);    
    console.log(numUsers);
  };
  
  const[languageFamiliarity, setLanguageFamiliarity] = useState('');
  const[duration, setDuration] = useState('');
  const[theme, setTheme] = useState('');

  const childToParent4 = (event) => {
    setLanguageFamiliarity(event);
    console.log(languageFamiliarity);
  }

  const childToParent5 = (event) => {
    setDuration(event);
    console.log(duration);
  }

  const childToParent6 = (event) => {
    setTheme(event);
    console.log(theme);
  }

  function Generate(){
    const param = {
      totalPeople: numUsers,
      languages: languageFamiliarity,
      experience: experience,
      totalIdeas: numIdeas,
      duration: duration,
      theme: theme
    }
    const prompt = GeneratePrompt(param);
    console.log(prompt);

    renderResponse(prompt);

  }
  const [response, setResponse] = React.useState('');

  const renderResponse = async(prompt) => {
    const res = await v(prompt);
  
    setResponse(res);
  
    console.log("Here is the response from the API:  " + res);
  }

  // renderResponse();

  const param = {
    totalPeople: 2,
    languages: "Java, C++",
    experience: "2-4",
    totalIdeas: 4,
    duration: "48hr",
    theme: "webapp"
  }
  //GeneratePrompt(param);

  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <div className="Lang-familiarity">
      <LanguageFamiliarityInput childToParent={childToParent4}/>
      </div>
      <div className="Lang-familiarity">
      <DurationInput childToParent={childToParent5}/>
      </div>
      <div className="Lang-familiarity">
      <ThemeInput childToParent={childToParent6}/>
      </div>
      <div className='Num-Users'>
      <Num_members childToParent = {childToParent3}/>
      </div>
      <div className='Num-Users'>
      <Experience childToParent = {childToParent}/>
      </div>
      <div className='Num-Users'>
      <NumberOfIdeas childToParent = {childToParent2}/>
      </div>
      <Button variant="contained" onClick={Generate}>Generate Ideas</Button>
      <p> THIS IS THE RESPONSE</p>
      <p>{response}</p>
    </div>
  );
  }



export default App;
