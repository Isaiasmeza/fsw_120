import React from "react"
import './App.css';
import Calc from "./Calc"
class App extends React.Component {
  constructor () {
    super()
    this.state = ({
      number1: "",
      number2: "",
      total : ""
    })
    this.handleClick = this.handleClick.bind(this)

    this.handleChange = this.handleChange.bind(this)
  }
  
  handleClick(e){
    this.setState ({
      total : e.target.id
    })
  }
  

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: Number(value)
    })
  }

  calculator = () => {
    return (<Calc  number1={this.state.number1} number2={this.state.number2} total={this.state.total}/>)    
  }
  
  render (){

    return (
      <div >      
        <h1 >Calculator</h1>

        <div>
          
          <input           
            name = "number1"
            onChange = {this.handleChange}
            value = {this.state.number1}
            type="number"
            >
          </input>
        </div>
        
        <div >
          
          <input 
             name = "number2" 
            onChange = {this.handleChange}
            value = {this.state.number2}    
            type="number"      
            >
          </input>
        </div>
        
        <div id="butt">
          <button id="addition" onClick = {this.handleClick} >Add</button>
          <button id="subtraction" onClick = {this.handleClick}>Subtract</button>
          <button id="multiply" onClick = {this.handleClick} >Multiply</button>
          <button id="divide" onClick = {this.handleClick} >Divide</button>
        </div>
        
        
        
       {this.state.total === "addition" || this.state.total === "subtract" || this.state.total === "multiply" || this.state.total === "divide" ? 
        (this.calculator()) : ""}
      </div>
    )      
  }
}

export default App;

