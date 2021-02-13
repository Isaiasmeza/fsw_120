import React from "react"

function Calc (props) {
  return (
     <div>
          <h1>Answer {
          props.total == "addition" ? props.number1 + props.number2 :
          props.total == "subtract" ? props.number1 - props.number2 :
          props.total =="multiply" ? props.number1 * props.number2 :
          props.total == "divide" ? props.number1 / props.number2 :
          
         "" }</h1>
        </div>
  )  
}
export default Calc