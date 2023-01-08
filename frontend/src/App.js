import logo from './logo.svg';
import './App.css';
import { v, test } from './Api';
import React from 'react';
import Header from './Header';




class App extends React.Component {

  constructor(props) {
    super(props);    this.state = {response: "HELLO"};
  }

  componentDidMount() {
    this.renderResponse();
  }

  renderResponse = async() => {
    const res = await v();
  
    this.setState({response: res});
  
    console.log("Here is the response from the API:  " + res);
  }

  render() {

  
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
    </div>
  );
  }
}


export default App;
