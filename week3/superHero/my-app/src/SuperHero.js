import React from "react"

function SuperHero(props){
    return(
    <div style={{textAlign:"center", backgroundColor:"lavender"}}>
       <h1 onClick={() => props.handleClick(props.catchPhrase)} style={{fontSize:"75px" , color:"blue" , fontFamily:"monospace"}}> {props.name}  </h1>
       <h2 style={{border:"5px solid"}}>Click me my picture!</h2>
       <img onClick={() => props.handleClick(props.catchPhrase)}src={props.imageName} style={{width:"250px", height:"250px"}} />
        <p style={{fontSize:"35px", fontFamily:"initial" ,color:"red"}}>Show: {props.show} </p>
        <hr/>
    </div>
    )
}

export default SuperHero;