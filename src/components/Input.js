import React from 'react'
import Button from './Button'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = css`
  padding: 1.8rem 0;
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  input {
    width: 98%;
    outline: none;

    @media(min-width: 768px) {
      width: 50%;
    }
  }

  button {
    margin: 0 1rem;
  }
`

function Input({handleSubmit, handleChange, value}) {
  return (
    <div className="form" css={styles}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <Button type="primary" disabled={!value}>Add</Button>
      </form>
    </div>
  )
}

export default Input