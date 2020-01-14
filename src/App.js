import React, { useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import Tasks from './components/Tasks/Tasks'
import Task from './components/Tasks/Task'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = css`
  margin: 0 auto;
  width: 100%;
  min-width: 445px;

  @media (min-width: 768px) {
    width: 60%;
  }

  header {
    margin-top: 5rem;
    padding: 1.5rem;
    text-align: center;
  }
`

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([
    {id: 1, task: 'Crear Todo'},
    {id: 2, task: 'Comprar cama'}
  ])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const submmited = (e) => {
    e.preventDefault()
    updateItems()
    setInputValue('')
  }

  const updateItems = () => {
    const updatedItems = [...items]
    updatedItems.push({id: Math.floor((Math.random()) * 10000), task: inputValue})

    setItems(updatedItems)
  }

  const removeTask = (id) => {
    const updatedItems = items.filter(function(el) {
      return el.id !== id
    })

    setItems(updatedItems)
  }

  return (
    <div css={styles}>
      <header>
        <Title>Todo App with React Hooks</Title>
      </header>
      <Input handleSubmit={submmited} handleChange={handleChange} value={inputValue} />
      <Tasks>
        { items.map((el) => <Task key={el.id} {...el} handleRemoveTask={removeTask} />) }
      </Tasks>
    </div>
  )
}

export default App