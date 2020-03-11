import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import * as I from '../../icon/index'
import 'react-datepicker/dist/react-datepicker.css'
/// ///////////////////////////////////////////////////////

// export const DatepickerComponent = (props) => {
//   const [startDate, setStartDate] = useState(new Date("2014/02/08"));
//   const [endDate, setEndDate] = useState(new Date("2014/02/10"));
//   return (
//     <div className='date-picker-wrap'>
//       <DatePicker
//         selected={startDate}
//         onChange={date => setStartDate(date)}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//       />
//       <DatePicker
//         selected={endDate}
//         onChange={date => setEndDate(date)}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         minDate={startDate}
//       />
//     </div>
//   );
// };

export const DatepickerComponent = (props) => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'))
  const [endDate, setEndDate] = useState(new Date('2014/02/10'))
  return (
    <div className='input-wrap date'>
      {
        props.label &&
        <label>
          {props.label}
          <span>{I.calendarIcon()}</span>
        </label>
      }
      <div className='date-picker-wrap'>
        <span>{I.calendarIcon()}</span>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        -
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
  )
}

export default DatepickerComponent

// const Calendar = (props) => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//       <div
//         width={R.or(props.width, '100%')}
//         justifyContent={R.or(props.justifyContent, 'space-around')}
//       >
//         <DatePicker
//           selected={startDate}
//           showPopperArrow={false}
//           inline={R.or(props.inline, false)}
//           onChange={date => setStartDate(date)}
//         />
//       </div>
//   );
// };
