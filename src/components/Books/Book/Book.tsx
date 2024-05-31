import './Book.css';
import { IBook } from '../../../types';
import { Link } from 'react-router-dom';
import { StarsRating } from '../../StarsRating';

const Book = ({ title, subtitle, isbn13, price, image, backgroundColor }: IBook )=> {

    return (
        <div className="book__wrap">
            <Link to={`/books/${isbn13}`} className="link__book">
                <div className="book_image-wrap" style={{ backgroundColor }}>
                    <img src={image} className="book-image" />
                </div>
                <div className="book__descr">
                    <h2 className="book_title">{title}</h2>
                    <span className="book_span">{subtitle}</span>
                    <div className="book_footer">
                            <div className="book__price">{price}</div>
                            <StarsRating
                                className={'book__stars'}
                            />
                    </div>
                </div>  

            </Link>
        </div>
    );
}

export { Book };



