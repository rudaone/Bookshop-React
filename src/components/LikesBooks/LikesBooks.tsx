import { useDispatch, useSelector } from 'react-redux'
import './LikesBooks.css'
import { ILikes, IStoreState } from '../../types'
import { Link } from 'react-router-dom'
import { Arrow } from '../Icons/Arrow'
import { StarsRating } from '../StarsRating'
import { removeFromLikes } from '../../redux/actionCreators'
import { AddLike } from '../Icons/AddLike'
import { Heart } from '../Icons/Heart'

const LikesBooks = () => {
    const dispatch = useDispatch()
    const likeItems = useSelector((state: IStoreState) => state.books.likeBook);
    const handleRemoveFromLikeBook = (isbn13: number) => {
        dispatch(removeFromLikes(isbn13));
    };

    const colors = [
        'rgba(244, 238, 253, 1)',
        'rgba(202, 239, 240, 1)',
        'rgba(215, 228, 253, 1)',

    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    if (!likeItems || likeItems.length === 0) {
        return (
            <div className='basket__header'>
                <div className='header__empty-cart'>your likes is empty</div>
            </div>
        );
    }

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
                {likeItems.map((el) =>
                    <div className="likes__card">
                        <div className="likes__image-wrapper" style={{ backgroundColor: getRandomColor() }}>
                            <img src={el.image} className="likes__image" />
                        </div>
                        <div className="likes__data-wrapper">
                            <Link to={`/books/${el.isbn13}`} className="likes__link">
                                <h3 className="like__data-title">{el.title}</h3>
                                </Link>
                            <h5 className="likes__data-authors">{el.authors}</h5>
                            <div className="likes__data-footer">
                                <h1 className="likes__data-price">{el.price}</h1>
                                <div className="likes__data-stars">
                                    <StarsRating/>
                                </div>
                            </div>
                        </div>
                        <Heart className='heart__link' onClick={() => handleRemoveFromLikeBook(el.isbn13)} 
                        />
                    </div>)}
            </div>
        </div>
    )
}

export { LikesBooks }