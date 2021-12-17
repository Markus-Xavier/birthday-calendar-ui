import React, { Component } from 'react'

export default class BirthdayForm extends Component {
  constructor() {
    super()
    this.state = {name: '', month: '', day: ''}
  }

  handleChange = (event) => {
    const stateValue = event.target.name;
    this.setState({[stateValue]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const bDayData = {
      id: Date.now(),
      name: this.state.name,
      month: this.state.month,
      day: this.state.day,
    }
    this.props.addBirthday(bDayData);
    this.setState({name: '', month: '', day: ''});
  } 

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input name='name' type='text' value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Month:
            <input name='month' type='number' value={this.state.month} onChange={this.handleChange} />
          </label>
          <label>
            Day:
            <input name='day' type='number' value={this.state.day} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit}>Add a Birthday!</button>
        </form>
      </div>
    )
  }
}
