import React, { Component } from "react";

const fname = "Ahsan";
const lname = "Ahmed";

class Challenge extends Component {
    
    render() { 
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };

        return(
            <div>
                <h1 style={mystyle}>
                    My Favourite Foods
                </h1>
                <ul>
                    <li>Biryani</li>
                    <li>Kheer</li>
                    <li>Pulao</li>
                    <li>Qorma</li>
                </ul>

                <h1 style={mystyle} >Hello {fname} {lname} !</h1>
            </div>
        );   
    }
}
 
export default Challenge;