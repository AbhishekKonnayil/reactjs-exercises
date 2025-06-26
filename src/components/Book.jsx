import React from 'react'
import { useState } from 'react'

const Book = () => {
    const [values, setValues] = useState({ Author: '', Title: '' })
    const [newBook, setNewBook] = useState([])
    const [searchItem, setSearchItem] = useState('')

    // }

    // handling submit

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!values.Author && !values.Title) {
            alert('You need to add Author and Title')
        } else {

            setNewBook([...newBook, values])
            setValues({ Author: '', Title: '' })
        }

    }




    // handling delete

    const handleDelete = (indexToDelete) => {

        setNewBook(newBook.filter((_, index) => index !== indexToDelete))

    }



    // Filtering 

    const filteredItems = newBook.filter((book) => {
        return (
            book.Author.toLowerCase().includes(searchItem.toLowerCase()) ||
            book.Title.toLowerCase().includes(searchItem.toLowerCase())
        )

    })





    // handling search

    const handleSearch = (e) => {

        setSearchItem(e.target.value)

    }
    return (
        <>
            <div>
                <h1>Book Title</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.Author}</td>
                                    <td>{book.Title}</td>
                                    <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                                </tr>
                            )

                        })}

                    </tbody>
                </table>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Author</label>
                <input type='text' placeholder='Enter Author Name' name='Author' value={values.Author} onChange={(e) => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
                <label>Title</label>
                <input type='text' placeholder='Enter Title' name='Title' value={values.Title} onChange={(e) => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
                <button type='submit'>Submit</button>
            </form>
            <form>
                <label>Search</label>
                <input type='text' placeholder='Search' value={searchItem} onChange={handleSearch} />
            </form>


        </>
    )
}

export default Book