import React, { Component } from 'react'

export default class App extends Component {
    componentDidMount(){
        let btn=document.querySelector("button")
        btn.addEventListener("click",()=>{
            console.log("button Clicked");
        })
    }
  render() {
    return (
      <div>
        <button>Change</button>
      </div>
    )
  }
}
