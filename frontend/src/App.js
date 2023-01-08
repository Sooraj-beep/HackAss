import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {GeneratePrompt} from './helper/GeneratePrompt';

function App() {
  const param = {
    totalPeople: 2,
    languages: "Java, C++",
    experience: "2-4",
    totalIdeas: 4,
    duration: "48hr",
    theme: "webapp"
  }
  GeneratePrompt(param);
  
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
    </div>
  );
}

export default App;
