import React from 'react';
import MonthCard from '../MonthCard/MonthCard';


export default function BDayContainer({months}) {
  const monthCards = () => {
      if(months[0].birthdays) {
        return months.map(month => {
          return <MonthCard month={month.name} birthdays={month.birthdays} key={month.id}/>
        });
      }
  }

  return (
    <div>
      {monthCards()}
    </div>
  )
}
