import React from "react"
class App extends React.Component {
  constructor(){
  super()
  this.state ={
    firstName:"",
    list:[]
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this)
}
handleChange(event){
  this.setState({
    firstName: event.target.value
  })
}
handleClick(event){
  event.preventDefault()
  this.setState((prevstate) => ({
    list: [prevstate.list, prevstate.firstName],
    
  }))
}
render(){
  return(
    <div>
      <form>
        <input type="text" value={this.state.firstName} onChange={this.handleChange} />
        <button onClick={this.handleClick}>submit</button>
      </form>
      <h1>{this.state.firstName}</h1>
      <ul>
        {this.state.list.map(function(listItem){
          return <li>{listItem}</li>
        })}
      </ul>
    </div>
  )
}
}
export default App;