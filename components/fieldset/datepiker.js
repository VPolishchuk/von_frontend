import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import * as I from '../../icon/index';
import { DatePickerWrap, InlineCalendarWrap } from './ui';
import { useWindowsHeight } from '../../hook/useWindowParams';
// helpers
import * as H from '../../helpers/index';
import 'react-datepicker/dist/react-datepicker.css';
/// ///////////////////////////////////////////////////////

export const DatepickerComponent = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { mobScreen } = useWindowsHeight();
  useEffect(() => {
    const currentDate = {
      startDate,
      endDate
    };
    props.setFieldValue && props.setFieldValue(props.name, currentDate);
  }, [startDate, endDate]);
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
          withPortal={mobScreen}
        />
        -
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          withPortal={mobScreen}
        />
      </DatePickerWrap>
    </div>
  )
}

export default DatepickerComponent;

export const CalendarInlineComponent = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleChange = (date) => {
    let newDate = new Date(date).getTime();
    let startD = new Date(startDate).getTime();
    if (H.isNilOrEmpty(startDate)) {
      return setStartDate(date);
    }
    if (R.lt(newDate, startD)) {
      return setStartDate(date);
    }
    if (R.gt(newDate, startD)) {
      setEndDate(date);
    }
  };
  useEffect(() => {
    const currentDate = {
      startDate,
      endDate
    };
    props.setFieldValue && props.setFieldValue(props.name, currentDate);
  }, [startDate, endDate]);
  return (
    <InlineCalendarWrap className='inline-calendar-wrap'>
      <DatePicker
        onChange={date => handleChange(date)}
        selectsEnd
        selectsStart
        startDate={startDate}
        endDate={endDate}
        inline
      />
    </InlineCalendarWrap>
  );
};
