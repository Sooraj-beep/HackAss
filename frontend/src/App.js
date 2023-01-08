import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Num_members from './NumberOfUsers';
import Experience from './Experience';
import NumberOfIdeas from './NumberOfIdeas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <div className='Num-Users'>
      <Num_members/>
      </div>
      <div className='Num-Users'>
      <Experience/>
      </div>
      <div className='Num-Users'>
      <NumberOfIdeas/>
      </div>
    </div>
  );
}

export default App;
