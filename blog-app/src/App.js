import NavBar from "./components/nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Admin from "./components/Admin";
import HomePage from "./components/Homepage";
import General from "./components/Tags/General";
import DSA from "./components/Tags/Datastructure";
import Astrophysics from "./components/Tags/Astrophysics";
import FooterBar from "./components/footer";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BlogView from "./components/show";
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
           <Route path='/general'  exact component={General}/>
        <Route path='/data-structure-and-algorithm' component={DSA} />
          <Route path='/astrophysics' element={<Astrophysics />} />
          <Route path='/show/:id' component={BlogView} />
        </Switch>
        
        
      <FooterBar />

      </div>
      
    </Router>
                
                

  );
};



export default App;
