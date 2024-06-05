import { useDispatch, useSelector } from 'react-redux'
import './LikesBooks.css'
import { ILikes, IStoreState } from '../../types'
import { Link } from 'react-router-dom'
import { Arrow } from '../Icons/Arrow'

const LikesBooks = () => {
    const dispatch = useDispatch()
    const favItems = useSelector((state: IStoreState) => state.books.likeBook);
    return (
        <div className='likes__wrapper'>
            <div className="likes__header">
                    <div className='likes__header-arrow'>
                        <Link to='/books' className='basket__header-arrow__link'>
                            <Arrow />
                        </Link>
                    </div>             
                <h1 className="likes__header-title">likes books</h1>
            </div>
            <div className="likes">
                {favItems.map((el) =>
                    <div className="likes__card">
                        <div className="likes__image-wrapper">
                            <img src={el.image} className="likes__image" />
                        </div>
                        <div className="likes__data-wrapper">
                            <Link to={`/books/${el.isbn13}`} className="likes__link"><h3 className="like__data-title">{el.title}</h3></Link>
                            <h5 className="likes__data-authors">{el.authors}</h5>
                            <div className="likes__data-footer">
                                <h1 className="likes__data-price">{el.price}</h1>
                                <div className="likes__data-stars"></div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export { LikesBooks }