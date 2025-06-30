import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact Us</h1>
        <form>
            <label>Name</label>
            <input type='text' placeholder='Enter your Name'/>
            <label>Email</label>
            <input type='text' placeholder='Enter your Email'/>
            <label>Message</label>
            <textarea rows={5} cols={20}/>
        </form>
    </div>
  )
}

export default Contact