interface IButton {
    children?: string, 
    className: string,
    isActive?: boolean,
    onClick: any,
}


interface IBook {
    title: string,
    subtitle: string,
    isbn13: number,
    price: number,
    image: string,
    url?: string,
    backgroundColor?: string,
    onClick?: Function
}

interface ISelectedBook {
    title: string;
    subtitle?: string;
    authors: string;
    publisher?: string;
    isbn10?: number;
    isbn13: number;
    pages?: number;
    year?: number;
    rating?: number;
    desc?: string;
    price: number;
    image: string;
    }
    


interface IBooksResponse {
    count: number,
    books: IBook[]
}

interface IBooksState {
    books: IBook[],
    limit: number,
    selectedBook: ISelectedBook,
    cart: ICart[],
    likeBook: ILikes[]

}

interface IBooksInfo {
    limit: number;
    search?: string | null,
}

interface IStoreState {
    books: IBooksState,
    limit: number,
    cart: ICartState
    user: IUserState,
}

interface IUserState {
    user: IUser
}

interface IUser {
    username: string,
    id: number,
    email: string
}

interface ISignUp {
    username: string,
    email: string,
    password: string,
    course_group?: number
}

interface ISignIn {
    email: string,
    password: string,
}


interface ICart {
    isbn13: number;
    title: string;
    price: number;
    authors: string;
    image: string
    quantity: number
}

interface ICartState {
    cart: ICart[];
}

interface IActivationInfo {
    uid: string,
    token: string
}

export interface ILikes {
    isbn13: number;
    title: string;
    price: number;
    authors: string;
    publisher?: string;
    image: string;
}

export interface ILikesState {
    likeBook: ILikes[];
}

export type {
    IButton,
    IBook,
    ISelectedBook,
    IBooksState,
    IStoreState,
    IBooksInfo,
    IBooksResponse,
    ISignUp,
    IUser,
    ISignIn,
    ICart,
    ICartState,
    IUserState,
    IActivationInfo,
}