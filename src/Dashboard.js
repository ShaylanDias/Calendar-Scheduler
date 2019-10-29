import React from "react";
import Calendar from "./Calendar.js"
import TimeCard from "./TimeCard.js"
import CardHolder from "./CardHolder.js"
import "./index.css"

export default class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.calendar = new Calendar()
      this.state = {
        selectedDay: undefined,
      };
    }

    retrieveDay(newDay) {
        this.setState({ selectedDay: newDay })
    }

    makeTimes() {
      let times = []
      if (this.state.selectedDay) {
        for (let i = this.state.selectedDay.getTime(); i <= this.state.selectedDay.getTime() + 1000*60*60*5; i+= 1000 * 60 * 30) {
          times.push(i)
        }
      }
      return times
    }

    render() {
        return (
          <div className = "inline">
            <div style = {{"margin-right": "100px"}}>
              <Calendar getDay = {this.retrieveDay.bind(this)}/>
            </div>
            <CardHolder times = {this.makeTimes.bind(this)} class="inline"></CardHolder>
          </div>
        );
      }
}