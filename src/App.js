import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';

//pages
import HomePage from './pages/HomePage/HomePage';
import ResumePage from './pages/ResumePage/ResumePage';
import WorksPage from './pages/WorksPage/WorksPage';

const WORKS = [
  {
    title: "Friending Me", 
    description: "Friending Me is an app where users can relax -- log their thoughts, brainstorm goals, and listen to relaxing lofi music.", 
    image: "https://i.imgur.com/5i8oeRE.png",
    link: "https://friending-me.herokuapp.com/",
    github: "https://github.com/mymy209/friending-me"
  },
  {
    title: "Timely", 
    description: "Timely is a calendar app where users are able to add, edit, delete their events on their schedule.", 
    image: "https://i.imgur.com/AWieVEi.png",
    link: "https://timely-msj.herokuapp.com/",
    github: "https://github.com/mymy209/timely",
  },
  {
    title: "Otaku Saga", 
    description: "Otaku Saga is an app where all anime lovers can track and explore their journey as an otaku! Users can browse animes, add them to their watchlist, and add/edit animes that are not on the database.", 
    image: "https://i.imgur.com/am4GesG.png",
    link: "https://otaku-saga.herokuapp.com/index",
    github: "https://github.com/mymy209/otaku-saga"
  }
]

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route exact path='/works' render={() => <WorksPage WORKS={WORKS} />}></Route>
          <Route exact path='/' render={() => <HomePage/>}></Route>
          <Route exact path='/resume' render={() => <ResumePage/>}></Route>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
