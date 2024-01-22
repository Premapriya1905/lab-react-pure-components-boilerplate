import React, { PureComponent } from "react";
import { Component } from "react";
import SimpleCounter from "./Component/SimpleCounter";
import PureCounter from "./Component/PureCounter";

class App extends Component{


  render(){
    return (
      <>
        
      <SimpleCounter/>
      <PureCounter/>
      
      </>
    )
  }
}

export default App;