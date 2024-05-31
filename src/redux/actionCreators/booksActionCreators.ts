import { IBook, IBooksInfo, IBooksResponse, ISelectedBook, ICart } from "../../types";
import { SET_BOOKS, LOAD_BOOKS, LOAD_SELECTED_BOOK, SET_SELECTED_BOOK, SET_BOOKS_LIMIT, SET_CURRENT_PAGE, SET_CURRENT_BOOK, SET_TOTAL, ADD_TO_CART } from '../actionTypes';
import { takeEvery, put } from 'redux-saga/effects'


const loadBooks = (booksInfo: IBooksInfo) => ({
    type: LOAD_BOOKS,
    booksInfo
})

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books
})

const setBookLimit = (limit: number) => ({
    type: SET_BOOKS_LIMIT,
    limit
})

const loadSelectedBook = (isbn13: string) => ({
    type: LOAD_SELECTED_BOOK,
    isbn13
})

const setSelectedBook = (selectedBook: ISelectedBook) => ({
    type: SET_SELECTED_BOOK,
    selectedBook
})

const setTotal = (total: number) => ({
    type: SET_TOTAL,
    total
})


const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

const setCurrentBook = (currentBook: number) => ({
   type: SET_CURRENT_BOOK,
   currentBook
})

const addToCart = (cart: ICart) => ({
    type: ADD_TO_CART,
    cart
});
function* fetchLoadBooks(action: any) {
    const { limit, currentPage} = action.booksInfo;
    const resp: Response = yield fetch(`https://api.itbook.store/1.0/new?limit=${limit}& offset=${(currentPage - 1) * limit }`)
    const data: IBooksResponse = yield resp.json();
    yield put(setBooks(data.books));
    yield put(setTotal(data.count))

}

function* fetchSelectedBook(action: any) {
    const resp: Response = yield fetch (`https://api.itbook.store/1.0/books/${action.isbn13}`)
    const selectedBook: ISelectedBook = yield resp.json();
    yield put(setSelectedBook(selectedBook));
}

function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
    yield takeEvery(LOAD_SELECTED_BOOK, fetchSelectedBook)
}

export {
    loadBooks,
    setBooks,
    watcherBooks,
    loadSelectedBook,
    setSelectedBook,
    setBookLimit,
    fetchLoadBooks,
    fetchSelectedBook,
    setCurrentPage,
    setCurrentBook,
    setTotal,
    addToCart
}