import React from "react";
import './index.css'

const paddingStyle = {
    'padding':'-15px',
    'text-align':'left'
};

export default class TimeCard extends React.Component {
    constructor(props) {
      super(props);
      alert(props.date)
      this.state = {
        date: this.props.date
      };
    }
  
    setDate(date) {
        this.setState({date: date})
    }
  
    render() {
      return (
        <div class="ui secondary basic button" /*className="green-border"*/>
        <p style = {paddingStyle} class = "description">
          {this.state.date ? (
            <p> {this.state.date}</p>
          ) : (
            <p>No Time</p>
          )}
          </p>
          <button  class="ui positive basic button">Confirm Time</button>
        </div>
      );
    }
  }