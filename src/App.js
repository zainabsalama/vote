import React , {Component} from "react";
import Php from "./Php";
import Python from "./Python";
import Go from "./Go";
import Java from "./Java";
import "./App.css";

class App extends Component {
  state={
    count1 :0,
    count2 :0,
    count3 :0,
    count4: 0
  }
   
  handelClick1=()=>{
    this.setState(
    {count1: this.state.count1+1});
  }
  handelClick2=()=>{
    this.setState(
    {count2: this.state.count2+1});
  }
  handelClick3=()=>{
    this.setState(
    {count3: this.state.count3+1});
  }
  handelClick4=()=>{
    this.setState(
    {count4: this.state.count4+1});
  }
 
 render(){
   return(
     <div className="App">
       <h1>Vote Your Language!</h1>

       <div className="php">
        <Php/>
        <button onClick={this.handelClick1} className="click">Click Here</button>
        <button className="count">{this.state.count1}</button>
       </div>

       <div className="python">
        <Python/>
        <button  onClick={this.handelClick2} className="click">Click Here</button>
        <button className="count">{this.state.count2}</button>
       </div>

       <div className="go">
         <Go/>
         <button  onClick={this.handelClick3} className="click">Click Here</button>
         <button className="count" >{this.state.count3}</button>
       </div>
      
       <div className="java">
         <Java/>
         <button  onClick={this.handelClick4} className="click">Click Here</button>
         <button className="count">{this.state.count4}</button>
        
       </div>
     </div>
   )
 }
  
}

export default App;
