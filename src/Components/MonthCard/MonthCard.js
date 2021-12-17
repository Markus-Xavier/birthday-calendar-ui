import React from 'react'

export default function MonthCard({ month, birthdays }) {
  const bdayNames = () => {
    if (birthdays.length) {
      return birthdays.map(person => {
        return (
          <div key={person.id}>{person.name}: {person.month}/{person.day} </div>
        )
      })
    } else {
      return <div>No Birthdays!</div>
    }
  }

  return (
    <div>
      <h2>{month}</h2>
        <div className='birthday-names'>
          {bdayNames()}
        </div>
    </div>
  )
}
