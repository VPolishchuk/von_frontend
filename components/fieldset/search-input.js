import React from 'react'
import * as I from '../../icon/index';
import { SearchWrap } from './ui';
/// //////////////////////////////////////

export const SearchInput = (props) => {
  return (
    <SearchWrap className='search-wrap'>
      <label htmlFor='search'>{I.searchIcon(25, 20, props.class ? '#D72066' : '#fff')}</label>
      <input className={props.class} type='text' id='search' name='search' placeholder='Search' />
    </SearchWrap>
  )
}

export default SearchInput;
