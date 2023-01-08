import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LanguageFamiliarityInput from './LanguageFamiliarity';
import DurationInput from './Duration';
import ThemeInput from './Theme';

function App() {
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
