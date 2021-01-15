import React from "react"
import Navbar from "./Navbar"
function Header(){
    return(
        <div style={{backgroundColor:"grey",textAlign:"center", color:"white"}}>
            <Navbar/>
            <h1 style={{fontSize:"95px"}}>Clean Blog</h1>
            <h3 style={{fontSize:"35px"}}>A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}
export default Header