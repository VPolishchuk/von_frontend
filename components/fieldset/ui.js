import styled from 'styled-components'
// ///////////////////////////////////////////

export const SearchWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  position: relative;
  & > label {
    position: absolute;
    top: 0;
    left: 15px;
    width: 25px;
    height: 100%;
    z-index: 10;
    display: flex;
    cursor: pointer;
    align-items: center;
  }
  & > input {
    border: 0;
    width: 25px;
    height: 30px;
    opacity: 0;
    margin: 0;
    color: $llGrey;
    padding-left: 40px;
    transition: all 0.4s;
    &.mob-search,
    &:focus {
      opacity: 1;
      width: 100%;
      transition: all 0.4s;
      border-radius: 0;
      // height: 50px;
      border-bottom: 1px solid $llGrey;
    }
  }
`
