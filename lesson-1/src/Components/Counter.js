import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    Increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{
        //     console.log('Callback value', this.state.count)
        // })
        // console.log(this.state.count);

        this.setState(preState => ({
            count: preState.count + 1
        }))
        console.log(this.state.count)
    }

    
    
  render() {

    const mystyle ={
      color: "white",
      fontSize: "20px",
      margin: "5px",
      backgroundColor: "blue",
      padding: "10px",
      cursor: "pointer"
    };



    return (
      <div>
        <h1>
        Count - {this.state.count}
        </h1>
        <button style={mystyle} onClick={()=> this.Increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
