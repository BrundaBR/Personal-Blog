import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const TagsBar = () => {
    return (
        <div>
            <h3>Search with Tags</h3>
            
            <ul>
                      <Router><Link  to='./astrophysics'><li>Astrophysics</li></Link></Router>
                      <Router><Link to='/data-structure-and-algorithm'><li>Data structure and ALgorithms</li></Link></Router>
                     <Router> <Link to='/general'><li>General</li></Link></Router>      
            </ul>
        
        </div>
    )
}


export default TagsBar;