import React, { Component } from 'react'
import {Redirect} from "react-router-dom";
//  import Home from "..//home/home";
import {FaUserAlt} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';


 class login extends Component {
     constructor(props) {
         super(props)
         let loggedIn=false
    //   const token=localStorage.getItem("token")
    //  let loggedIn=true
    //   if(token == null){
    //      loggedIn=false
    // }
         this.state = {username:"",
                      password:"",
                      loggedIn
                    }
     }
     handle =(name) => (event) => {
        this.setState({ [event.target.name] : event.target.value});
      }
    
  
      
      Submitform = (event) => {
       
        event.preventDefault(); 
        const{username,password}=this.state
        if(username==="admin" && password==="system"){
          localStorage.setItem("token","webdeveloper")
          this.setState({ loggedIn:true})
        }
      }
      login = () =>{
        if(this.state.username==="" && this.state.password===""){
   alert("please fill !!!")
        }
      }
     
    render() {
      if(this.state.loggedIn){
        return <Redirect to="/Home"/>
      }
        return (
            <div className="outer">
               

                <div className="box">
                <h1 className="text-center text-h1">Login</h1>
                <div className="form">

                <form onSubmit={this.Submitform} autoComplete="off">
                <span><FaUserAlt/></span><input type="text" name="username" value={this.state.username}  placeholder="username" onChange={this.handle(this.state.username)}/><br/>
                <span><FaLock/></span><input type="password" name="password" value={this.state.password}  placeholder="password" onChange={this.handle(this.state.password)}/>
               <div className="btn"><input type="submit" value="Login" onClick={this.login} /></div>
              

                    </form>
                    </div> 

                </div>
            </div>
        )
    }
}

export default login
