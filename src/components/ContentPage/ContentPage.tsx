import './ContentPage.css';
import { useParams } from 'react-router-dom';
import { IStoreState, ISelectedBook, ILikes } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadSelectedBook, addToCart } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import { Arrow } from '../Icons/Arrow';
import { useState } from 'react';
import { Twitter } from '../Icons/Twitter';
import { Facebook } from '../Icons/Facebook';
import { Subscribe } from '../Subscribe';
import { ICart } from '../../types';
import { Rating } from 'react-simple-star-rating';
import { StarsRating } from '../StarsRating';
import { AddLike } from '../Icons/AddLike';
import { removeFromLikes } from '../../redux/actionCreators';
import { addToLikes } from '../../redux/actionCreators';


const ContentPage = () => {
    const { isbn13 = '' } = useParams();
    const selectedBook = useSelector((state: IStoreState) => state.books.selectedBook);
    const favorites = useSelector((state: IStoreState) => state.books.likeBook);

    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        dispatch(loadSelectedBook(isbn13))
        console.log('Selected book:', selectedBook)
    }, [isbn13, dispatch])

    
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (selectedBook && favorites) {
            setIsLiked(favorites.some(book => book.isbn13 === selectedBook.isbn13));
        }
    }, [selectedBook, favorites]);

    const handleLikeClick = () => {
        const likeBook: ILikes = {
            isbn13: selectedBook.isbn13,
            title: selectedBook.title,
            price: selectedBook.price,
            authors: selectedBook.authors,
            publisher: selectedBook.publisher,
            image: selectedBook.image
        };

        if (isLiked) {
            dispatch(removeFromLikes(selectedBook.isbn13));
        } else {
            dispatch(addToLikes(likeBook));
        }

        setIsLiked(!isLiked);
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const colors = [
        'rgba(244, 238, 253, 1)',
        'rgba(202, 239, 240, 1)',
        'rgba(215, 228, 253, 1)',

    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };


    return (
        <div className='content__page-wrapper'>
            <div className='upper__wrapper'>
                <div className='content__page_header'>
                    <div className='content__page_header-menu'>
                        <Link to='/new' className='content__page_header-arrow'>
                            <Arrow />
                        </Link>
                    </div>
                    <h3 className='content__page_header-title'>{selectedBook.title}</h3>
                </div>
                <div className='content__book-info'>
                    <div className='content__img-container'
                        style={{ backgroundColor: getRandomColor() }}
                    >  <div className='like__wrapper'>
                            <AddLike
                                isLiked={isLiked}
                                onClick={handleLikeClick}
                            />
                        </div>
                        <img className="content__book-image" src={selectedBook.image} alt="img name" />
                    </div>
                    <div className='content__book-infocard'>
                        <div className='price_rate-row'>
                            <div className='content__book-price'>{selectedBook.price}</div>
                            <StarsRating className='content__book-rate' />
                        </div>
                        <div className='author-container'>
                            <div className='author'>Authors:</div>
                            <div className='content__book-author'>{selectedBook.authors}</div>
                        </div>
                        <div className='publisher-container'>
                            <div className='publisher'>Publisher:</div>
                            <div className='content__book-publisher'>{selectedBook.publisher}</div>
                        </div>
                        <div className='year-container'>
                            <div className='year'>Year:</div>
                            <div className='content__book-year'>{selectedBook.year}</div>
                        </div>
                        <div className='page-container'>
                            <div className='page'>Pages:</div>
                            <div className='content__book-page'>{selectedBook.pages}</div>
                        </div>
                        <button
                            className='add-btn'
                            onClick={() => {
                                const cartItem: ICart = {
                                    isbn13: selectedBook.isbn13,
                                    title: selectedBook.title,
                                    price: selectedBook.price,
                                    authors: selectedBook.authors,
                                    image: selectedBook.image,
                                    quantity: 1
                                };
                                dispatch(addToCart(cartItem));
                                alert("Product successfully added to cart!")
                            }}
                            children='Add to cart'
                        />
                    </div>
                </div>
            </div>

            <div className='middle__wrapper'>
                <div className='tabs'>
                    <button
                        className={activeTab === 'description' ? 'active' : ''}
                        onClick={() => handleTabClick('description')}>
                        Description
                    </button>
                    <button
                        className={activeTab === 'authors' ? 'active' : ''}
                        onClick={() => handleTabClick('authors')}>
                        Authors
                    </button>
                    <button
                        className={activeTab === 'reviews' ? 'active' : ''}
                        onClick={() => handleTabClick('reviews')}>
                        Reviews
                    </button>
                </div>

                <div className='tab-content'>
                    {activeTab === 'description' && <p>{selectedBook.desc}</p>}
                    {activeTab === 'authors' && <p>{selectedBook.authors}</p>}
                    {activeTab === 'reviews' && <p>No reviews available.</p>}
                </div>
                <div className='social__network'>
                    <Link to='https://www.facebook.com/'>
                        <Facebook />
                    </Link>

                    <Link to='https://x.com/?lang=ru'>
                        <Twitter />
                    </Link>

                    <Link className='dots' to=' '>
                        <span>•••</span>
                    </Link>
                </div>

                <Subscribe />
            </div>



        </div>
    )
}

export { ContentPage }