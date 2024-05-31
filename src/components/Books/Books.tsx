import React, { useEffect } from 'react';
import './Books.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../redux/actionCreators';
import { Book } from './Book/Book';
import { IBook, IStoreState } from '../../types';
import { Pagination } from '../Pagination';
import { Subscribe } from '../Subscribe';
import { BooksSelect } from '../BooksSelect';
const Books = () => {
  const books = useSelector((state: IStoreState) => state.books.books);
  const limit = useSelector((state: IStoreState) => state.books.limit);
  const currentPage = useSelector((state: IStoreState) => state.books.currentPage);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadBooks({ limit, currentPage }));
  // }, [limit, currentPage, dispatch]);

  useEffect(() => {
    dispatch(loadBooks({ limit, currentPage }))
  }, [limit, currentPage])


  const colors = [
    'rgba(244, 238, 253, 1)',
    'rgba(202, 239, 240, 1)',
    'rgba(215, 228, 253, 1)',

  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const renderBooks = () => {
    const rows = [];
    for (let i = 0; i < books.length; i += 1) {
      rows.push(
        <>
          {books.slice(i, i + 1).map((book: IBook) => (
            <Book
              key={book.isbn13}
              title={book.title}
              subtitle={book.subtitle}
              isbn13={book.isbn13}
              price={book.price}
              image={book.image}
              url={book.url}
              backgroundColor={getRandomColor()}
            />
          ))}
        </>
      );
    }
    return rows;
  };

  return (
    <div className="books_main-wrap">
      <h1 className="books_main-title">New Releases Books</h1>
      <div className="books_wrap">
        {renderBooks()}
      </div>
      <BooksSelect/>
    </div>
  );
};

export { Books };
