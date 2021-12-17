import React, { Component } from 'react'
import { fetchData } from '../../apiCalls/apiCalls';
import './App.css';
import { months } from '../../months_data';
import BDayContainer from '../BDayContainer/BDayContainer';
import BirthdayForm from '../BirthdayForm/BirthdayForm';


export default class App extends Component {
  constructor () {
    super()
    this.state = {birthdays: null, months: months};
  }

  componentDidMount() {
    fetchData('birthdays')
      .then(data => this.setState({birthdays: data}))
      .then(this.sortBirthdays)
  }

  sortBirthdays = () => {
      const sortedBirthdays = this.state.months.map(month => {
        return this.state.birthdays.reduce((month, birthday) => {
          if (birthday.month === month.id) {
            month.birthdays.push(birthday);
          }
          return month;
        }, {...month, birthdays: []});
      })
      this.setState({months: sortedBirthdays});
  }

  addBirthday = (birthdayData) => {
    const bDayMonthIndex = this.state.months.find(month => month.id === parseInt(birthdayData.month)).id - 1;
    this.setState(prevState => {
      prevState.months[bDayMonthIndex].birthdays.push(birthdayData);
      return {
        months: prevState.months
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
          <BirthdayForm addBirthday={this.addBirthday}/>
        </div>
        <div className='bday-container'>
          <BDayContainer months={this.state.months}/>
        </div>
      </div>
    );
  }
}

