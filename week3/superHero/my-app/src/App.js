import React from "react"
import './App.css'
import SuperHero from "./SuperHero"
import shdata from "./shdata.json"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      heroes: shdata
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (AL){
    alert(AL)
  }
  render(){
    const heroes = this.state.heroes.map(hero => <SuperHero key={hero.id} handleClick={this.handleClick} catchPhrase={hero.catchPhrase} imageName={hero.imageName}name={hero.name} show={hero.show}/>)
      return (
        <div>
          {heroes}
        </div>
      )
  }
}

export default App;
