import React, { PureComponent} from "react";
import '../Styles/PureCounter.css'

class PureCounter extends PureComponent{
        constructor(){
            super();
            this.state={
                count:0,
                toggle: false,
            }
        }

        toggling=()=>{
            this.setState((bool)=>({toggle: !bool.toggle}))
        }

        incrementCount=()=>{
            if(this.state.toggle){
                this.setState((prev)=>({ count: prev.count + 1}))
            }
        }

        render(){
            let { count, toggle}=this.state
            console.log(toggle)

            var changeStyle=null;
            if(toggle){
                changeStyle={
                    backgroundColor:"green"
                }
            }else{
                changeStyle={
                    backgroundColor:"red"
                }
            }

            var changeButtonStyle=null;

            if(toggle){
                changeButtonStyle={
                    cursor:"pointer"
                }
            }else{
                changeButtonStyle={
                    cursor: "not-allowed"
                }
            }
        

        return(
            <>
            <div id="pure">
                <h1>Pure component</h1>
                <h3>Count : {count}</h3>
                <div>
                <button style={changeStyle} onClick={this.toggling}>Set toggle</button>
                <button style={changeButtonStyle} onClick={this.incrementCount} disabled={!toggle}>counter</button>
                </div>
                
            </div>
                
            </>
            )
            
        }
}

export default PureCounter;