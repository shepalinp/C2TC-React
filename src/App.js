import logo from './logo.svg';
import './App.css';
import Counter from './components/components';
// import HelloWorld from './components/HelloWorld';
// import welcome from './components/welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HelloWorld></HelloWorld> */}
         {/* <welcome></welcome> */}
         <Counter></Counter>
         

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
