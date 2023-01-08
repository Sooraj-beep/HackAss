import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import LanguageFamiliarityInput from './LanguageFamiliarity';
import DurationInput from './Duration';
import ThemeInput from './Theme';

function App() {
  const[languageFamiliarity, setLanguageFamiliarity] = useState('');
  const[duration, setDuration] = useState('');
  const[theme, setTheme] = useState('');

  const childToParent = (event) => {
    setLanguageFamiliarity(event);
    setDuration(event);
    setTheme(event);
  }
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <div className="Lang-familiarity">
      <LanguageFamiliarityInput/>
      </div>
      <div className="Duration">
      <DurationInput/>
      </div>
      <div className="Theme">
      <ThemeInput/>
      </div>
    </div>
  );
}

export default App;
