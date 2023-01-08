import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import Header from './Header';
import Num_members from './NumberOfUsers';
import Experience from './Experience';
import NumberOfIdeas from './NumberOfIdeas';
import {GeneratePrompt} from './helper/GeneratePrompt';

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
      <div className='Num-Users'>
      <Num_members childToParent = {childToParent3}/>
      </div>
      <div className='Num-Users'>
      <Experience childToParent = {childToParent}/>
      </div>
      <div className='Num-Users'>
      <NumberOfIdeas childToParent = {childToParent2}/>
      </div>
    </div>
  );
}

export default App;
