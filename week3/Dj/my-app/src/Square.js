import React from "react"
function Square(props){
    return(
        <div style={{gridColumn:"2/3", display:"grid", gridTemplateColumn:"1fr 1fr"}}>
            <canvas style={{width:"600px", height:"200px", backgroundColor: props.square[0], border:"1px black solid", gridColumn:"1/2", gridRow:"1/2", marginLeft:"auto"}}> </canvas>
            <canvas style={{width:"600px", height:"200px", backgroundColor: props.square[1], border:"1px black solid", gridColumn:"2/2", gridRow:"1/2"}}> </canvas>
            <canvas style={{width:"600px", height:"200px", backgroundColor: props.square[2], border:"1px black solid", gridColumn:"1/2", gridRow:"2/2", marginLeft:"auto"}}> </canvas>
            <canvas style={{width:"600px", height:"200px", backgroundColor: props.square[3], border:"1px black solid", gridColumn:"2/2", gridRow:"2/2"}}> </canvas>
            
        </div>
    )
}
export default Square 