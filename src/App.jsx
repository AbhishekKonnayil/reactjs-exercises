import { useState } from 'react'

import './App.css'
import Book from './components/Book'
import Accordion from './components/Accordion'
import Contact from './components/Contact'
import Todo from './components/Todo'

function App() {


  return (
    <>
      {/* <Accordion title='HTML' children='this is section 1'/>
      <Accordion title='CSS' children='this is section 2'/>
       <Accordion title='JAVASCRIPT' children='this is section 3'/> */}
       <Contact/>
       <Todo/>

    </>
  )
}

export default App
