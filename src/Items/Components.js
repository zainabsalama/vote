import React , {Component} from "react";
import style from "./Components.module.css";
class Components extends Component{
    state = {
        name1: "Php", count1: 0,
        name2: "Python", count2: 0,
         name3: "Go", count3: 0,
         name4: "Java", count4: 0
        }
        
    

    handelClick1=()=>{ this.setState({count1: this.state.count1+1}); }   
   
    handelClick2=()=>{ this.setState({count2: this.state.count2+1}); }
   
    handelClick3=()=>{ this.setState({count3: this.state.count3+1}); }
   
    handelClick4=()=>{ this.setState({count4: this.state.count4+1}); }

	render(){
       return(
           <>
            <h1>Vote Your Language!</h1>
            <div class={style.divs}>
                <p className={style.language}>{this.state.name1}</p>
                <button onClick={this.handelClick1} className={style.click}>Click Here</button>
                <button className={style.count}>{this.state.count1}</button>
            </div>

            <div class={style.divs}>
                <p className={style.language}>{this.state.name2}</p>  
                <button  onClick={this.handelClick2} className={style.click}>Click Here</button>
                <button className={style.count}>{this.state.count2}</button>
            </div>

            <div class={style.divs}>
                <p  className={style.language}>{this.state.name3}</p> 
                <button  onClick={this.handelClick3} className={style.click}>Click Here</button>
                <button className={style.count}>{this.state.count3}</button>
            </div>
            
            <div class={style.divs} >
                <p className={style.language}>{this.state.name4}</p> 
                <button  onClick={this.handelClick4} className={style.click}>Click Here</button>
                <button className={style.count}>{this.state.count4}</button>
            </div>
            </>
       );
   }
}
export default Components;