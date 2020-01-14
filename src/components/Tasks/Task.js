import React from 'react'
import Button from './../Button'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: var(--white);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 200ms ease;

  &:last-child {
    margin-bottom: 0;
  }

  input {
    margin-right: 1rem;
  }

  .left-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  button {
    margin: 0 0.5rem;
  }
`

const Task = ({id, task, handleRemoveTask}) => {
  return (
    <div id={id} css={styles}>
      <div className="left-content">
        <input type="checkbox"/>
        <div className="content">{task}</div>
      </div>

      <div className="right-content">
        <Button type="terciary">Edit</Button>
        <Button type="secondary"
          onClickHandler={handleRemoveTask.bind(this, id)}
        >
          Remove
        </Button>

      </div>

    </div>
  )
}

export default Task