import React from 'react';
import * as R from 'ramda';
import Router from 'next/router';
// //////////////////////////////////////////

export const goToRoute = (url, as, options) => (Router.push(url, as, options));

// /////////////////////////////////////////////////////////////////////////////////////////////////

// ADDITION RAMDA HELPERS
export const isTrue = R.equals(true);
export const isFalse = (value) => R.equals(value, false);
export const isNot = R.complement(R.is);
export const isNotNil = R.complement(R.isNil);
export const notEquals = R.complement(R.equals);
export const isNotEmpty = R.complement(R.isEmpty);
export const notContain = R.complement(R.contains);
export const isNaN = R.equals(NaN);
export const isNotNaN = notEquals(NaN);
export const notHas = R.complement(R.has);
export const isNotNilAndNotEmpty = (value) => R.and(isNotNil(value), isNotEmpty(value));
export const isNilOrEmpty = (value) => R.or(R.isNil(value), R.isEmpty(value));
export const isZero = (value) => R.equals(value, 0);
export const isNotZero = (value) => notEquals(value, 0);
export const isNilOrZero = (value) => R.or(R.isNil(value), isZero(value));
export const isNotNilAndNotZero = (value) => R.and(isNotNil(value), isNotZero(value));
export const mapIndexed = R.addIndex(R.map);
export const isAllTrue = (...arg) => R.all(isTrue, arg);
export const isAllFalse = (...arg) => R.all(isFalse, arg);
export const isAllNilOrEmpty = R.all(isNilOrEmpty);
export const isAllNotNilOrNotEmpty = R.all(isNotNilAndNotEmpty);
export const isAnyNilOrEmpty = R.any(isNilOrEmpty);
export const isOneNotNilOrNotEmpty = R.any(isNotNilAndNotEmpty);
export const isFunction = R.is(Function);
export const isObject = R.is(Object);
export const isArray = R.is(Array);
export const isBoolean = R.is(Boolean);
export const isString = R.is(String);
export const isNumber = R.is(Number);

export const getItemFromLocalStorage = (itemName) => localStorage.getItem(itemName);
export const setItemToLocalStorage = (itemName, itemValue) => localStorage.setItem(itemName, itemValue);

export const genShortId = () => shortId.generate();

export const ifElse = (predicate, ifSt, elseSt) => {
  if (predicate) return ifSt;
  return elseSt;
};

export const shouldReturn = (willExportPDF, content) => {
  if (willExportPDF) {
    return null;
  }
  return content;
};
// //////////////////////////////////////////////////////////////////////////////
// export const getCurrentDateStartOf = (start) => moment().startOf(start);
// export const getCurrentDate = (date, format) => moment(date).format(format);
// export const getCurrentDateWithFormat = (format) => moment().format(format);
// export const getSetDateStartOf = (date, start) => moment(date).startOf(start);

// export const isValidMoment = (item) => (
//   moment(item).isValid()
// );

export const renameKeys = R.curry((keysMap, obj) => R.reduce(
  (acc, key) => R.assoc(R.or(keysMap[key], key), obj[key], acc),
  {},
  R.keys(obj),
));

// export const addMomentTime = (
//   item,
//   interval = 0,
//   type = 'hours',
// ) => {
//   if (isValidMoment(item)) return moment(item).add(interval, type).format();
//   return item;
// };

export const getOrElse = (obj, prop, elseSt) => {
  if ((isNotNil(obj) && isNotNil(obj[prop]))) {
    return obj[prop];
  }
  return elseSt;
};

// export const createLocalDateTimeFromInstanceOrISOString = (item, format) => (
//   moment(item).format(format)
// );

// export const createUnixTimeFormat = (item) => (
//   moment(item).unix()
// );

// export const splitTime = (time) => {
//   if (isNilOrEmpty(time)) return null;
//   const timeArr = R.split(' ', time);
//   const hoursAndMinutes =  R.split(':', timeArr[0]);
//   if (R.lte(hoursAndMinutes[0], 9)) {
//     return `0${timeArr[0]}`
//   }
//   if (R.and(R.gte(hoursAndMinutes[0], 10), R.lte(hoursAndMinutes[0], 12)))  {
//     return `${timeArr[0]}`
//   }
//   return `12 + ${hoursAndMinutes[0]}:${hoursAndMinutes[1]}`
// };

// export const convertUnixCodeToTime = (time, format) => {
//   if (!time) return null;
//   return  (
//     moment.unix(time).format(R.or(format, 'LT'))
//   );
// }

// export const convertUnixCodeToUTC = (time) => {
//   if (!time) return null;
//   return  (
//     moment.unix(time).utc()
//   );
// }
// export const checkColorBg = (x) => {
//   if (Number.isInteger(R.divide(x, 2))) {
//     return '#F1F1F3';
//   }
//   return '#fff';
// };

// export const replaceKeysToParams = (options, endpoint) => {
//   if (R.or(R.is(String, options), R.is(Number, options))) {
//     return R.replace(/:[^/]*/, options, endpoint);
//   } 
//   return endpoint;
// };