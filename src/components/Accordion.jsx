import React from 'react'
import { useState } from 'react'

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
            {isOpen &&
                <p>{children}</p>}
        </div>
    )
}

export default Accordion