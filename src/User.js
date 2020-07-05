import React from 'react';
import { browserHistory } from "react-router";
export class User extends React.Component{
   onNavigateHome(){
       browserHistory.push("/Home")

   }
   render(){
      return(
        <div>
            <h3>User id:</h3>
            <button onClick={this.onNavigateHome}>Go Home</button>
        </div>

      );
   }
}
export default App;