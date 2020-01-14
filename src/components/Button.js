import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = css`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 32px;
  transition: all 250ms ease-in-out;
  outline: none;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0 1rem;
  font-size: 0.875rem;
  line-height: 1;
`
const primary = css`
  color: var(--white);
  background-color: var(--primary-color);
  border-color: var(--primary-color);

  &:hover {
    background-color: var(--primary-color-light);
    border-color: var(--primary-color-light);

  }
  &:active {
    border-color: var(--primary-color-dark);
    box-shadow: none;
    background-color: var(--primary-color-dark);
  }
`
const secondary = css`
  color: var(--white);
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);

  &:hover {
    background-color: var(--secondary-color-light);
    border-color: var(--secondary-color-light);

  }
  &:active {
    border-color: var(--secondary-color-dark);
    box-shadow: none;
    background-color: var(--secondary-color-dark);
  }
`

const terciary = css`
  color: var(--gray-400);
  background-color: var(--white);
  border-color: var(--gray-400);

  &:hover {
    color: var(--white);
    background-color: var(--gray-400);
    border-color: var(--gray-400);

  }
  &:active {
    color: var(--white);
    background-color: var(--gray-500);
    border-color: var(--gray-500);
  }
`

export default ({type, onClickHandler, children}) => {
  const dinamicStyle = type === 'primary' ? primary : (type === 'secondary' ? secondary : terciary);


  return (
    <button css={[styles, dinamicStyle]} onClick={onClickHandler}>{children}</button>
  )
}
