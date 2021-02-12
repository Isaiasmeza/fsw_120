import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"


function Navbar(){
    return(
        <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service"> Services</Link>
        
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/service"><Service/></Route>
        </Switch>
    </div>
      

    )
}
export default Navbar