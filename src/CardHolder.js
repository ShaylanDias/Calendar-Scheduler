import React from "react";
import './index.css'
import TimeCard from "./TimeCard"
import Signup from "./Signup.js"


export default class CardHolder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        times: this.props.times
      };
    }
  
    mapTimes() {
        if(this.state.times()) {
            return this.state.times().map(time => <TimeCard
                date = {new Date(time)}
            >
            </TimeCard>)
        }
    }
  
    renderSignup() {
        if (this.state.times) {
            return <Signup></Signup>
        }
    }

    render() {
      return (
        <div style = {{height:"800px"}} >
          <p className = "verticalStack">
            {this.mapTimes()}
          </p>
          {this.renderSignup()}
        </div>
      );
    }
  }