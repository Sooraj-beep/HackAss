import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import Header from './Header';
import Num_members from './NumberOfUsers';
import Experience from './Experience';
import NumberOfIdeas from './NumberOfIdeas';

function App() {
  const [experience, setExperience] = React.useState('');

  const handleChange = (event) => {
    console.log("haha");
    setExperience(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <div className='Num-Users'>
      <Num_members/>
      </div>
      <div className='Num-Users'>
      <Experience onChange = {handleChange}/>
      </div>
      <div className='Num-Users'>
      <NumberOfIdeas/>
      </div>
    </div>
  );
}

export default App;
