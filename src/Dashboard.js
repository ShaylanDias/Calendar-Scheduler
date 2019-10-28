import React from "react";
import Calendar from "./Calendar.js"

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

    render() {
        return (
          <div>
            <Calendar getDay = {this.retrieveDay.bind(this)}/>
            <h2>{String(this.state.selectedDay)} </h2>
          </div>
        );
      }
}