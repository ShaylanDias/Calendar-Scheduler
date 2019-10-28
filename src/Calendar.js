import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


export default class CalendarComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleDayClick = this.handleDayClick.bind(this);
      this.state = {
        selectedDay: undefined,
      };
    }
  
    handleDayClick(day, {selected}) {
      this.setState({ selectedDay: day });
      if (selected) {
        // Unselect the day if already selected
        this.setState({ selectedDay: undefined });
        this.props.getDay(undefined)  
        return;
      }
      this.props.getDay(day)  
    }
  
    render() {
      return (
        <div>
          <DayPicker 
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
           />
          {this.state.selectedDay ? (
            <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
          ) : (
            <p>Please select a day.</p>
          )}
        </div>
      );
    }
  }