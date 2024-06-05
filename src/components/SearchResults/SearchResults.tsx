import { useDispatch, useSelector } from "react-redux"
import { IBook, IStoreState    } from "../../types"
import { useEffect } from "react"
import { loadBooks } from "../../redux/actionCreators"
import { Book } from "../Books"
import './SearchResults.css'
import { useParams } from "react-router-dom"

const SearchResults = () => {
    const books = useSelector((state: IStoreState) => state.books.books)
    const limit = useSelector((state: IStoreState) => state.books.limit)
    const search = new URLSearchParams(window.location.search)

    const dispatch = useDispatch()

    const colors = [
        'rgba(244, 238, 253, 1)',
        'rgba(202, 239, 240, 1)',
        'rgba(215, 228, 253, 1)',

    ];


    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };



    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        console.log(params.get('search'));
        dispatch(loadBooks({ limit, search: params.get('search') }))
    }, [limit])

    return (
        <div className="books_main-wrap">
            <h1 className="books_main-title">{`"${search.get('search')}" search results`}</h1>
            <span className="searchresults-span">{`Found ${books.length} books`}</span>
            <div className="books_wrap">
                {
                    books.map((el) =>
                        <Book image={el.image} title={el.title} subtitle={el.subtitle} price={el.price} isbn13={el.isbn13} backgroundColor={getRandomColor()} />)
                }
            </div>
        </div>
    )
}

export { SearchResults }