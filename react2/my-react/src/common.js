import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export function Wellcome(props) {
    // let greeting = "Hello";
  // if(props.gender==="male"){
  //   greeting = "Hello Sir ";
  // }else if(props.gender ==="female"){
  //   greeting = "Hello mam ";
  // }
  // console.log(props)

  let greeting = "Hello"
  if(props.gender === "male"){
    return <h1>{greeting} Sir {props.name}</h1> 
  }
  else if(props.gender === "female"){
    return <h1>{greeting} Mam {props.name}</h1>
  }

  return <h1>{greeting} {props.name}</h1>
}

// export function Avater(){
//   return <img src={logo} className="App-logo" alt="logo" />
// }



export class Clock extends Component{
  constructor() {
      super();
      this.state = {
        date : new Date(),
        incre : 0
      }
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({
          date : new Date()
        })
    }, 1000);
  }

  Increment = () => {
    if(this.state.incre > 9) {

    }else {
        this.setState({
          incre: this.state.incre + 1 
        });
    }
  }
  Decrement = () => {
    if(this.state.incre < 1) {

    }else {
        this.setState({ 
          incre: this.state.incre - 1 
        });
    }
  }

  render(){
    return(
        <div>
          <h1>Time : {this.state.date.toLocaleTimeString()}</h1>
          <button onClick={this.Increment}>Increment</button>
          <button onClick={this.Decrement}>Decrement</button>
          {this.state.incre}
        </div>
    )
  }
}