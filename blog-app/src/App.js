import NavBar from "./components/nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Admin from "./components/Admin";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TagsBar from "./components/Sidebar";
const App = () => {
  //Hooks!
  return (
    <Router>
  <div >
        <header>
          <NavBar />
        </header>
        <Switch>
         <Route path='/'  exact component={HomePage}/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/admin-page-onlyadmin' component={Admin} />
        </Switch>
        

      </div>
    </Router>
                
                

  );
};



export default App;
