import { IBook, IBooksInfo, IBooksResponse, ISelectedBook, ICart, ILikes } from "../../types";
import {
    SET_BOOKS,
    LOAD_BOOKS,
    ADD_QUANTITY,
    REMOVE_QUANTITY,
    CLEAR_CART,
    LOAD_SELECTED_BOOK,
    SET_SELECTED_BOOK,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REMOVE_FROM_LIKES,
    ADD_TO_LIKES,
} from '../actionTypes';
import { takeEvery, put } from 'redux-saga/effects'


const loadBooks = (booksInfo: IBooksInfo) => ({
    type: LOAD_BOOKS,
    booksInfo
})

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books
})

const loadSelectedBook = (isbn13: string) => ({
    type: LOAD_SELECTED_BOOK,
    isbn13
})

const setSelectedBook = (selectedBook: ISelectedBook) => ({
    type: SET_SELECTED_BOOK,
    selectedBook
})

const addToCart = (cart: ICart) => ({
    type: ADD_TO_CART,
    cart
});

const addQuantity = (isbn13: number) => ({
    type: ADD_QUANTITY,
    isbn13
});

const removeQuantity = (isbn13: number) => ({
    type: REMOVE_QUANTITY,
    isbn13
});

const clearCart = () => ({
    type: CLEAR_CART
});

// Удаление из корзины
const removeFromCart = (isbn13: number) => ({
    type: REMOVE_FROM_CART,
    isbn13
});

const addToLikes = (likeBook: ILikes) => ({
    type: ADD_TO_LIKES,
    likeBook
});

const removeFromLikes = (isbn13: number) => ({
    type: REMOVE_FROM_LIKES,
    isbn13
});


function* fetchLoadBooks(action: any) {
    const { search } = action.booksInfo;
    console.log(search)
    let url = `https://api.itbook.store/1.0/new`;
    if (search) {
        url = `https://api.itbook.store/1.0/search/` + search;
    }
    const resp: Response = yield fetch(url);
    const data: IBooksResponse = yield resp.json();
    yield put(setBooks(data.books));
}

function* fetchSelectedBook(action: any) {
    const resp: Response = yield fetch(`https://api.itbook.store/1.0/books/${action.isbn13}`)
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
    fetchLoadBooks,
    fetchSelectedBook,
    addToCart,
    removeFromCart,
    addQuantity,
    removeQuantity,
    clearCart,
    addToLikes,
    removeFromLikes,
}