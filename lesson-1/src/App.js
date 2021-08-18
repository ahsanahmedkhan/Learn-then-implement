import React, { Component } from 'react';
// import { Button } from "mdbreact";
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import Challenge from './Components/Challenge';
import Greeting from './Components/Greeting';

class App extends Component {
   
  render() {
    return (
      <div>
      
        <Greeting />
        <Message />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <Challenge />

      </div>
    );
  }
}

export default App;