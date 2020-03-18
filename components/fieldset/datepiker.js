import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import * as I from '../../icon/index';
import { DatePickerWrap } from './ui';
import 'react-datepicker/dist/react-datepicker.css';
/// ///////////////////////////////////////////////////////

export const DatepickerComponent = (props) => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));
  return (
    <div className='input-wrap date'>
      {
        props.label &&
        <label>
          {props.label}
          <span>{I.calendarIcon()}</span>
        </label>
      }
      <DatePickerWrap className='date-picker-wrap'>
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
      </DatePickerWrap>
    </div>
  )
}

export default DatepickerComponent;

export const CalendarInlineComponent = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));
  return (
    <DatePicker
      // selected={startDate}
      onChange={date => setStartDate(date)}
      selectsEnd
      selectsStart
      startDate={startDate}
      endDate={endDate}
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      inline
    />
  );
};
