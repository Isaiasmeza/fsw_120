import React from "react"
function Card(props){
    let vacationSpots = [

        {
      
          place: "Meridian, Idaho",
      
          price: 40,
      
          timeToGo: "Spring"
      
        },{
      
          place: "Cancun",
      
          price: 900,
      
          timeToGo: "Winter"
      
        },{
      
          place: "China",
      
          price: 1200,
      
          timeToGo: "Fall"
      
        },{
      
          place: "Russia",
      
          price: 1100,
      
          timeToGo: "Summer"
      
        },{
      
          place: "Lebanon",
      
          price: 400,
      
          timeToGo: "Spring"
      
        }
      
      ]
      let vacation = vacationSpots.map(function(props){
        let places = props.place
        let price = props.price
        let timeToGo = props.timeToGo
        

      return(
        <div>
            <h2 >Location: {places}</h2>
            <h3>Time to Go: {timeToGo} </h3>
            <h3 style={{color:"green"}}>Price:$ {price} </h3>
            <hr/>
        </div>
    )
})
return (
    <div>
      <h1> The Best places to go on vacation!</h1>
        {vacation}
    </div>
)
}
export default Card