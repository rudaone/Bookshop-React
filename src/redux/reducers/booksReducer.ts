import { IBooksState, IBook, ISelectedBook, ICart, ILIkeBook } from '../../types';
import { ADD_TO_CART, SET_BOOKS, REMOVE_QUANTITY, ADD_QUANTITY, CLEAR_CART, SET_BOOKS_LIMIT, REMOVE_FROM_CART, SET_SELECTED_BOOK, LIKE_BOOK, REMOVE_FROM_LIKE_BOOK} from '../actionTypes';


const loadCartFromLocalStorage = (): ICart[] => {
    try {
        const serializedCart = localStorage.getItem('cart');
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (e) {
        console.warn("Could not load cart from localStorage", e);
        return [];
    }
}

const saveCartToLocalStorage = (cart: ICart[]) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem('cart', serializedCart);
    } catch (e) {
        console.warn("Could not save cart to localStorage", e);
    }
}


const loadFavoritesFromLocalStorage = (): ILIkeBook[] => {
    try {
        const serializedFavorites = localStorage.getItem('favorites');
        return serializedFavorites ? JSON.parse(serializedFavorites) : [];
    } catch (e) {
        console.warn("Could not load favorites from localStorage", e);
        return [];
    }
}

const saveFavoritesToLocalStorage = (favorites: ILIkeBook[]) => {
    try {
        const serializedFavorites = JSON.stringify(favorites);
        localStorage.setItem('favorites', serializedFavorites);
    } catch (e) {
        console.warn("Could not save favorites to localStorage", e);
    }
}
const initialState: IBooksState = {
    books: [] as IBook[],
    limit: 6,
    selectedBook: {} as ISelectedBook,
    cart: loadCartFromLocalStorage(),
    likeBook: loadFavoritesFromLocalStorage(),

};

const booksReducer = (state: IBooksState = initialState, action: any) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...state,
                books: action.books,
            };
        }
        case SET_BOOKS_LIMIT: {
            return {
                ...state,
                limit: action.limit,
            };
        }
        case SET_SELECTED_BOOK: {
            return {
                ...state,
                selectedBook: action.selectedBook,
            };
        }

        case ADD_TO_CART: {
            const newCart = [...state.cart];
            const index = newCart.findIndex(item => item.isbn13 === action.cart.isbn13);
            if (index !== -1) {
                newCart[index].quantity = (newCart[index].quantity || 1) + 1;
            } else {
                newCart.push({ ...action.cart, quantity: 1 });
            }
            saveCartToLocalStorage(newCart);
            return ({
                ...state,
                cart: newCart
            });
        }

        case REMOVE_FROM_CART: {
            const newCart = state.cart.filter(item => item.isbn13 !== action.isbn13);

            saveCartToLocalStorage(newCart);

            return ({
                ...state,
                cart: newCart
            });
        }

        case ADD_QUANTITY: {
            const newCart = [...state.cart];
            const index = newCart.findIndex(item => item.isbn13 === action.isbn13);

            if (index !== -1) {
                newCart[index].quantity += 1;
            }

            saveCartToLocalStorage(newCart);

            return ({
                ...state,
                cart: newCart
            });
        }
        case REMOVE_QUANTITY: {
            const newCart = [...state.cart];
            const index = newCart.findIndex(item => item.isbn13 === action.isbn13);

            if (index !== -1 && newCart[index].quantity > 1) {
                newCart[index].quantity -= 1;
            }

            saveCartToLocalStorage(newCart);

            return ({
                ...state,
                cart: newCart
            });
        }

        case CLEAR_CART: {
            saveCartToLocalStorage([]);
            return {
                ...state,
                cart: []
            };
        }        
        case LIKE_BOOK: {
            const newFavBooks = [...state.likeBook, action.likeBook];
            saveFavoritesToLocalStorage(newFavBooks);
            return {
                ...state,
                likeBook: newFavBooks
            };
        }
        case REMOVE_FROM_LIKE_BOOK: {
            const newFavBooks = state.likeBook.filter(book => book.isbn13 !== action.isbn13);
            saveFavoritesToLocalStorage(newFavBooks);
            return {
                ...state,
                likeBook: newFavBooks
            };
        }
        default: {
            return state;
        }
    }
};

export { booksReducer };