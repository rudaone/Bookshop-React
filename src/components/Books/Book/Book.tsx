import './Book.css';
import { IBook } from '../../../types';
import { Link } from 'react-router-dom';
import { StarsRating } from '../../StarsRating';

const Book = ({ title, subtitle, isbn13, price, image, backgroundColor }: IBook) => {

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="book__wrap">
            <Link to={`/books/${isbn13}`} onClick={toTop} className="link__book">
                <div className="book_image-wrap" style={{ backgroundColor }}>
                    <img src={image} className="book-image" />
                </div>
            </Link>
                <div className="book__descr">
                <Link to={`/books/${isbn13}`} onClick={toTop} className="link__book">
                    <h2 className="book_title">{title}</h2>
                    <span className="book_span">{subtitle}</span>
                </Link>
                    <div className="book_footer">
                        <div className="book__price">{price}</div>
                        <StarsRating
                            className={'book__stars'}
                        />
                    </div>
                </div>
            
        </div>
    );
}

export { Book };



