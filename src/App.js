import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div className="title">
          <h1>
            Hello, my name is Myra Yamazaki.<br/>
            I'm a full-stack software engineer based on Palmdale, CA. 
          </h1>
        </div>
    </div>
  );
}

export default App;
