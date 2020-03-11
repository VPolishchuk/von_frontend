import React from 'react';
import * as R from 'ramda';
import * as I from '../../icon/index'
import './style.scss'
/////////////////////////////////////////

export const SearchInput = (props) => {
  return (
    <div className='search-wrap'>
      <label htmlFor='search'>{I.searchIcon(25, 20, props.class ? '#D72066' : '#fff')}</label>
      <input className={props.class} type='text' id='search' name='search' placeholder='Search'/>
    </div>
  )
}

export default SearchInput;
