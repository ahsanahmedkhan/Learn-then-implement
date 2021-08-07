import React, {Component} from "react";

class Greeting extends Component {
    
    render() { 

        const date = new Date();
        const currentTime = date.getHours();

        const customStyle = {
            fontSize: "30px",
            border: "1px solid black",
            padding: "10px",
            color: ""
        };

        let greeting;

        if(currentTime < 12){
            greeting = "Good Morning"
            customStyle.color = "red";
        }else if(currentTime < 18){
            customStyle.color = "green";
            greeting = "Good Afternoon"
        }else{
            customStyle.color = "blue";
            greeting = "Good Night"
        }
        
        return (
            
            
            <div>              
                <h1 style={customStyle}>{greeting}</h1>
            </div>
         );
    }
}
 
export default Greeting;