import React from "react"
class Form extends React.Component{
    constructor(){
    super()
    this.state = {
        
        firstName:"",
        lastName:"",
        email:"",
        description:""
        

    }
 }
 onChange= e =>{
     this.setState({
     [e.target.name]: e.target.value
     })
    }

    
 render(){
     return(
         <div>
             <form>
                 <input placeholder="First Name"
                  value={this.state.firstName}
                  name="firstName"
                  onChange={e => this.onChange(e)}
                  />
                  <br/>
                 <input placeholder="Last Name"
                  name="lastName"
                 value={this.state.lastName}
                 onChange={e => this.onChange(e)}/>
                 <br/>
                 <input placeholder="Email"
                  name="email"
                 value={this.state.Email}
                 onChange={e => this.onChange(e)}/>
                 <br/>
                 <textarea placeholder="Tell me about Yourself"
                  name="description"
                 value={this.state.description}
                 onChange={e => this.onChange(e)}/>
                 <br/>
                 <button onClick={this.handleClick}>submit</button>

             </form>
             
         </div>
     )
 }
} 

export default Form;