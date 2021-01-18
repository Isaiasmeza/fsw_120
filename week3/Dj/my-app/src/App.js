import React from "react"
import Square from "./Square"


class App extends React.Component{
    constructor(){
    super()
    this.state = { square:["white", "white","white","white"]}
    this.click1 = this.click1.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
    this.click4 = this.click4.bind(this)
    this.click5 = this.click5.bind(this)
    this.click6 = this.click6.bind(this)
    this.click7 = this.click7.bind(this)
    this.click8 = this.click8.bind(this)
}
click1(){
  this.state.square.map(block => {
    if (block === "white"){
        return(
         this.setState(prevState => {
             return({square:["black","black","black","black"]})
         }
    )
    )} else{
         return(
           this.setState(prevState => {
             return({square: ["white","white","white","white"]})
           }
           ))
        }
    })
}
   click2(){
    this.setState(prevState => {
        return({square:["purple","purple" , prevState.square[2], prevState.square[3]]})
    })}

    click3(){
        this.setState(prevState => {
            return({square:[prevState.square[0], prevState.square[2], prevState.square[3],"blue"]})
        })
    }

    click4(){
        this.setState(prevState => {
            return({square:[prevState.square[0], prevState.square[2], prevState.square[3], "blue"]})
        })
    }
    click5(){
        this.setState(prevState => {
            return({square:[ "red" ,prevState.square[1], prevState.square[2], prevState.square[3]]})
        })
    }
    click6(){
        this.setState(prevState => {
            return({square:[ prevState.square[0], prevState.square[1], prevState.square[3], "orange"]})
        })
    }
    click7(){
        this.setState(prevState => {
            return({square:[ prevState.square[0], prevState.square[1], prevState.square[2] ,"pink"]})
        })
    }
    click8(){
        this.setState(prevState => {
            return({square:[ prevState.square[0], prevState.square[1], prevState.square[2], "yellow"]})
        })
    }
    render (){
        return(
            <div  style={{textAlign:"center", backgroundColor:"khaki"}}>
                <h1 style={{color:"midnightblue", fontSize:"75px"}}>DJ Colors</h1>
                <Square square={this.state.square}/>
                <button onClick={this.click1} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click2} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click3} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click4} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click5} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click6} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click7} style={{margin:"15px"}}>Click </button>
                <button onClick={this.click8} style={{margin:"15px"}}>Click </button>
            </div>
        )
    }
}


export default App