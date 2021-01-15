import React from "react"
import Dice from "./Dice"
let counter = 0;

class dices extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        counter += 1;
        if (counter <= 4){
            this.setState((prevState) => {
                return(
                    prevState.num1 = Math.floor(Math.random()*6+1),
                    prevState.num2 = Math.floor(Math.random()*6+1),
                    prevState.num3 = Math.floor(Math.random()*6+1),
                    prevState.num4 = Math.floor(Math.random()*6+1),
                    prevState.num5 = Math.floor(Math.random()*6+1)
                )
            }
          )       
    } else if (counter > 3) {
        counter = 0;
        this.setState((prevState) => {
            return (
                prevState.num1 =0,
                prevState.num2 =0,
                prevState.num3 =0,
                prevState.num4 =0,
                prevState.num5 =0
            )
        }
        )
    }
}
  
render(){
        return(
            <div style={{backgroundColor:"indigo", textAlign:"center"}}>
                <h1 style={{fontFamily:"serif", fontSize:"50px"}}>Hit the button to roll your dice!</h1>
                <Dice num={this.state.num1} handleClick={this.handleClick}/>
                <Dice num={this.state.num2} handleClick={this.handleClick} />
                <Dice num={this.state.num3} handleClick={this.handleClick}/>
                <Dice num={this.state.num4} handleClick={this.handleClick} />
                <Dice num={this.state.num5} handleClick={this.handleClick}/>
                <button onClick={this.handleClick} style={{fontSize:"30px", backgroundColor:"lavender"}}>Roll</button>
            </div>
        )
    }
}
export default dices