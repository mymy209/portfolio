import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';

//pages
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}></Route>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
