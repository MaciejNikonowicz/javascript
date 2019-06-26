import React, { Component } from 'react';

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 1, title: 'Book1', desc: 'This is description of book one' },
        { id: 2, title: 'Book2', desc: 'This is description of book two' },
        { id: 3, title: 'Book3', desc: 'This is description of book three' }
      ]
    };
  }
  render() {
    let books = this.state.books.map(book => {
      return (
        <div className='card'>
          <div className='card-body'>
            <h2 className='card-title'>{book.title}</h2>
            <p>{book.desc}</p>
          </div>
        </div>
      );
    });
    return <div className='container'>{books}</div>;
  }
}

export default BookList;
