import React, { Component } from 'react'
import { fetchData } from '../../apiCalls/apiCalls';
import './App.css';
import { months } from '../../months_data';
import BDayContainer from '../BDayContainer/BDayContainer';


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



  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
  
        </div>
        <div className='bday-container'>
          <BDayContainer months={this.state.months}/>
        </div>
      </div>
    );
  }
}

