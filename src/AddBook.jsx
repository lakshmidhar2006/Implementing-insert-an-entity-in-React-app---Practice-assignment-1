import React from 'react'

const AddBook = () => {
  return (
    <div>
        <h1>Add Book</h1>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" />
            <label htmlFor="coverImage">Cover Image URL</label>
            <input type="text" id="coverImage" name="coverImage" />
            <button type="submit">Add Book</button>
        </form>
    </div>
  )
}

export default AddBook
