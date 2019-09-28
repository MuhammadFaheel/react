import React, { Component } from 'react'

export default class Lifecycle extends Component {
   
    constructor() {
        super();
        console.log(" contructor ")
        this.state={
            islogged:true
        } 
        
    }
    componentDidMount(){
        console.log(" component did mount ")
        setTimeout(() => {
            this.setState(
              {  islogged : false}
            )
        }, 2000);
    }
    componentDidUpdate() {
        console.log("Component Did Updtae" + this.state.value)
    }
    // componentWillMount(){
    //     console.log(" component will mount ")
    // }
    Change=()=>{
        this.setState({
            value : !this.state.value
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={()=>this.Change()}>Change</button> */}
                {
                    this.state.islogged===true ? <h1>loading</h1> : <h1>Data loaded sucessfully</h1>
                }
            </div>
        )
    }
}
