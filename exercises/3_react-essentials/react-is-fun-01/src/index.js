import React, { Component } from 'react';
import { render } from 'react-dom';

const bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
];

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
    </section>
  );
};

const Library = ({books}) => {
  return (
    <div>
      {books.map((book, id) => {
        return(
          <Book key={book.title} title={book.title} author={book.author} pages={book.pages} />
        );
      })} 
    </div>
  );
};

render(
  <Library books={bookList}/>,
  document.getElementById("root")
);

