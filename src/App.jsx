import { useState } from 'react'

import './App.css'
import Book from './components/Book'
import Accordion from './components/Accordion'

function App() {


  return (
    <>
      <Accordion title='HTML' children='this is section 1'/>
      <Accordion title='CSS' children='this is section 2'/>
       <Accordion title='JAVASCRIPT' children='this is section 3'/>

    </>
  )
}

export default App
